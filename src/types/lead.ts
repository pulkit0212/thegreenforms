export type LeadSource = "Hero" | "Contact" | "ProjectCTA" | "CityPage";

export interface Lead {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  service: string;
  budget: string;
  message: string;
  source: LeadSource;
  projectSlug?: string;
  createdAt: string;
  consent: boolean;
}
