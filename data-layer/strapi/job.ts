import axios from '../apiClient';
import qs from 'qs';
import {
  ApiResponseJobSlugs,
  ApiResponseJobs,
  JobData,
  JobSearchQuery,
} from './job-entities';
// import { companyReducer } from './utils';

const apiUrl = process.env.STRAPI_API_BASE_URL;

export const getJobs = async (): Promise<ApiResponseJobs> => {
  const res = await axios.get(`${apiUrl}/jobs`);
  const rawJobs = res.data; // Includes pagination data

  return rawJobs;
};

export const getJobSlugs = async (): Promise<ApiResponseJobSlugs> => {
  const query = qs.stringify({ fields: ['slug'] }, { encodeValuesOnly: true });

  const res = await axios.get(`${apiUrl}/jobs?${query}`);
  const rawSlugs = res.data.data;
  const slugs = rawSlugs.map((rawSlug: JobData) => rawSlug.attributes.slug);

  return slugs;
};

export const getJobBySlug = async (slug: string): Promise<JobData> => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await axios.get(`${apiUrl}/jobs?${query}`);
  const rawCompany = res.data.data[0];

  return rawCompany;
};

// SEARCH JOBS TS

type StrapiQuery = {
  populate: string[];
  filters: { [key: string]: any };
};

export const searchJobs = async (query: JobSearchQuery): Promise<JobData[]> => {
  const strapiQuery: StrapiQuery = {
    // populate: ['company', 'company.logo', 'company.coverImage', 'skillsTags'],
    populate: ['company', 'skillTags'],
    filters: {},
  };

  // Add Boolean Query Filters
  if (query.remoteOk) strapiQuery.filters['remoteOk'] = { $eq: true };
  if (query.featured) strapiQuery.filters['featured'] = { $eq: true };

  // Add Inclusion Query Filters
  strapiQuery.filters['jobType'] = { $in: query.jobTypes };

  // Add Range Query Filters
  strapiQuery['filters']['annualSalary'] = {
    $gte: query.minBaseSalary,
    $lte: query.maxBaseSalary,
  };

  // Add Full Text Search Query
  type BasicFilter = {
    $containsi?: string;
    $eq?: boolean | string;
    $in?: string[];
    $gte?: number;
    $lte?: number;
  };

  type SearchField = {
  [key: string]: string | BasicFilter | NestedSearchField;
};

type NestedSearchField = {
  [key: string]: BasicFilter;
};

  if (query.searchBarText) {
    const searchFields = [
      'title',
      'jobCategory',
      'jobType',
      'jobDescription',
      'aboutYou',
      'jobResponsibilities',
      'remunerationPackage',
      'skillsTags.name',
      'company.name',
      'company.city',
    ];

    strapiQuery['filters']['$or'] = searchFields.map((field): SearchField => {
      const searchField: SearchField = {};

      if (!field.includes('.')) {
        searchField[field] = { $containsi: query.searchBarText };
      } else {
        const [level1, level2] = field.split('.');
        const nestedSearchField: NestedSearchField = {};
        nestedSearchField[level2] = { $containsi: query.searchBarText };
        searchField[level1] = nestedSearchField;
      }
      return searchField;
    });
  }

  const strapiQueryStr = qs.stringify(strapiQuery, { encodeValuesOnly: true });
  const res = await axios.get(`${apiUrl}/jobs?${strapiQueryStr}`);
  const rawJobs = res.data.data;

  return rawJobs;
};
