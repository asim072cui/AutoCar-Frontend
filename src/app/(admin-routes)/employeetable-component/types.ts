export enum OrganizationType {
  COMPANY = 'COMPANY',
  CV_ONLY = 'CV_ONLY',
}

export interface OrganizationStats {
  id: string;
  name: string;
  type: OrganizationType;
  total: number;
  cvOnlyCount: number | null;
  pending: number;
  reviewed: number;
  shortlisted: number;
  rejected: number;
}

export interface UserApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  appliedDate: string;
  status: 'Pending' | 'Reviewed' | 'Shortlisted' | 'Rejected';
  hasCV: boolean;
  cvUrl?: string;
  applicationtype: 'CV_ONLY' | 'FULL_FORM';
  img?: string;
}
