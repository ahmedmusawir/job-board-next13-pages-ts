import axios from "../apiClient";
import qs from "qs";
import { ApiResponseJobSlugs, ApiResponseJobs, JobData } from "./job-entities";
// import { companyReducer } from './utils';

const apiUrl = process.env.STRAPI_API_BASE_URL;

export const getJobs = async (): Promise<ApiResponseJobs> => {
  const res = await axios.get(`${apiUrl}/jobs`);
  const rawJobs = res.data; // Includes pagination data

  return rawJobs;
};

export const getJobSlugs = async (): Promise<ApiResponseJobSlugs> => {
  const query = qs.stringify({ fields: ["slug"] }, { encodeValuesOnly: true });

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
