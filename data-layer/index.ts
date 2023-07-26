import * as strapiJobAPI from "./strapi/job";
import { JobDataSource } from "./strapi/job-entities";
import * as strapiCompanyAPI from "./strapi/company";
import { CompanyDataSource } from "./strapi/company-entities";

interface DataSource extends JobDataSource, CompanyDataSource {}

const datasource: DataSource = { ...strapiJobAPI, ...strapiCompanyAPI };

export default datasource;
