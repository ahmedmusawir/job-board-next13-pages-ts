export interface Job {
  id: number;
  attributes: {
    title: string;
    slug: string;
    remoteOk: boolean;
    annualSalary: number;
    datePosted: string;
    jobType: string;
    jobDescription: string;
    jobCategory: string;
    createdAt: string;
    updatedAt: string;
    featured: boolean;
    company: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
          city: string;
          slogan: string;
        };
      };
    };
  };
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface JobData {
  jobs: Job[];
  meta?: {
    pagination: Pagination;
  };
}
