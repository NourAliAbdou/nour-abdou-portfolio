export interface IBlogData {
  title: string;
  cover_image: string;
  body: string;
  comments_count: string;
  public_reactions_count: string;
  readable_publish_date: string;
  tag_list: string;
  description: string;
}
export interface IExperienceData {
  id: number;
  title: string;
  description: Array<string>;
  period: string;
  company: string;
  companyWebsite: string;
  jobType: Array<string>;
  location: string;
}
export interface IVolunteerData {
  title: string;
  description: Array<string>;
  period: string;
  company: string;
  companyWebsite: string;
  jobType: string;
  location: string;
}
export interface ITechnologiesData {
  id: 1;
  title: string;
  icon: string;
}
