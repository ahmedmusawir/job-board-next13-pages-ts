import axios from "../apiClient";
import qs from "qs";
import {
  ApiResponseCompanySlugs,
  ApiResponseCompanies,
  CompanyData,
} from "./company-entities";
// import { companyReducer } from './utils';

const apiUrl = process.env.STRAPI_API_BASE_URL;

export const getCompanies = async (): Promise<ApiResponseCompanies> => {
  const res = await axios.get(`${apiUrl}/companies`);
  const rawJobs = res.data; // Includes pagination data

  return rawJobs;
};

export const getCompanySlugs = async (): Promise<ApiResponseCompanySlugs> => {
  const query = qs.stringify({ fields: ["slug"] }, { encodeValuesOnly: true });

  const res = await axios.get(`${apiUrl}/companies?${query}`);
  const rawSlugs = res.data.data;
  const slugs = rawSlugs.map((rawSlug: CompanyData) => rawSlug.attributes.slug);

  return slugs;
};

export const getCompanyBySlug = async (slug: string): Promise<CompanyData> => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["logo", "coverImage"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await axios.get(`${apiUrl}/companies?${query}`);
  const rawCompany = res.data.data[0];

  return rawCompany;
};
