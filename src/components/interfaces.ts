export interface GetJobResponse {
  appliedFilters: {
    count?: string;
    tag?: string;
    geo?: string;
    industry?: string;
  };
  jobCount: number;
  jobs: Job[];
}
export interface Job {
  companyLogo: string;
  companyName: string;
  id: number;
  jobDescription: string;
  jobExcerpt: string;
  jobGeo: string;
  jobIndustry: string[];
  jobLevel: string;
  jobTitle: string;
  jobType: string[];
  url: string;
}
