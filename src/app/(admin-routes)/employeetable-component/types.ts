export enum OrganizationType {
  COMPANY = 'COMPANY',
  CV_ONLY = 'CV_ONLY',
}

/* ---------- Base Organization ---------- */
interface BaseOrganizationStats {
  id: string;
  name: string;
  total: number;
  cvOnlyCount: number | null;
  pending: number;
  reviewed: number;
  shortlisted: number;
  rejected: number;
}

/* ---------- CV ONLY ORGANIZATION ---------- */
export interface CvOnlyOrganizationStats extends BaseOrganizationStats {
  type: OrganizationType.CV_ONLY;
  cvUrl: string;
}

/* ---------- COMPANY (FULL FORM) ---------- */
export interface CompanyOrganizationStats extends BaseOrganizationStats {
  type: OrganizationType.COMPANY;
}

/* ---------- UNION ---------- */
export type OrganizationStats =
  | CvOnlyOrganizationStats
  | CompanyOrganizationStats;

/* ---------- USER APPLICATION ---------- */
export interface UserApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  appliedDate: string;
  status: 'Pending' | 'Reviewed' | 'Shortlisted' | 'Rejected';
  hasCV: boolean;
  applicationtype: 'CV_ONLY' | 'FULL_FORM';
  cvUrl?: string;
  img?: string;
}
