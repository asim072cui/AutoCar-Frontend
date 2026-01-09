export type LeaveWorkflowStatus =
  | 'draft'
  | 'pending'
  | 'approved'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'rejected';

export type LeaveContext = 'authorized' | 'unplanned' | 'system' | string;

export type LeaveClassification =
  | 'vacation'
  | 'sick'
  | 'suspension'
  | 'unpaid'
  | 'administrative'
  | 'other'
  | string;

export type LeaveApprovalStatus = 'pending' | 'approved' | 'rejected' | 'not_required';

export type LeaveApprovalStage = 'MANAGER' | 'HR';

export type LeaveRequestOrigin =
  | 'EMPLOYEE_SELF_SERVICE'
  | 'MANAGER_SUBMITTED'
  | 'HR_MANUAL_ENTRY'
  | 'SYSTEM_GENERATED'
  | 'IMPORTED'
  | string;

export type LeaveReportingChannel =
  | 'WEB'
  | 'MOBILE'
  | 'CHAT'
  | 'EMAIL'
  | 'PHONE'
  | 'IN_PERSON'
  | 'SYSTEM'
  | string;

export type LeaveReasonCode =
  | 'PERSONAL'
  | 'MEDICAL'
  | 'FAMILY'
  | 'BEREAVEMENT'
  | 'JURY_DUTY'
  | 'MILITARY'
  | 'PARENTAL'
  | 'DISCIPLINARY'
  | 'COMPLIANCE'
  | 'OTHER'
  | string;

export interface LeaveRequestMetadata {
  balanceBeforeMinutes?: number | null;
  balanceBeforeDays?: number | null;
  balanceChangeMinutes?: number | null;
  balanceChangeDays?: number | null;
  balanceAfterMinutes?: number | null;
  balanceAfterDays?: number | null;
  requestOrigin?: LeaveRequestOrigin | null;
  reportingChannel?: LeaveReportingChannel | null;
  reasonCode?: LeaveReasonCode | null;
  autoApproval?: boolean | null;
  reportedAt?: string | null;
  reportedById?: string | null;
  reportedBy?: LeaveUserSummary | null;
  managerNote?: string | null;
  employeeNote?: string | null;
  hrNote?: string | null;
  extras?: Record<string, unknown> | null;
}

export interface LeaveAllowanceSnapshot {
  classification?: LeaveClassification | null;
  unit?: 'minutes' | 'half_day' | string | null;
  balanceBeforeMinutes?: number | null;
  balanceBeforeDays?: number | null;
  balanceChangeMinutes?: number | null;
  balanceChangeDays?: number | null;
  balanceAfterMinutes?: number | null;
  balanceAfterDays?: number | null;
  periodStart?: string | null;
  periodEnd?: string | null;
}

export interface LeaveStatusSnapshot {
  capturedAt?: string | null;
  employmentStatus?: string | null;
  departmentId?: string | null;
  departmentName?: string | null;
  legalEntityId?: string | null;
  legalEntityName?: string | null;
  position?: string | null;
  allowance?: LeaveAllowanceSnapshot | null;
}

export interface LeaveAttachmentMetadata {
  storageId?: string | null;
  fileName?: string | null;
  category?: string | null;
  description?: string | null;
  uploadedBy?: string | null;
  uploadedAt?: string | null;
}

export interface LeaveUserSummary {
  _id?: string;
  fullName?: string;
  email?: string;
}

export interface LeaveEmployeeSummary {
  _id?: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  legalEntityName?: string;
  departmentName?: string;
  avatarUrl?: string;
}

export interface LeaveCalendarEvent {
  _id: string;
  employeeInfoId?: string;
  employee?: LeaveEmployeeSummary | null;
  requestedBy?: LeaveUserSummary | null;
  workflowStatus?: LeaveWorkflowStatus;
  leaveStatus?: string | null;
  classification?: LeaveClassification | null;
  context?: LeaveContext | null;
  requestOrigin?: LeaveRequestOrigin | null;
  reportingChannel?: LeaveReportingChannel | null;
  reasonCode?: LeaveReasonCode | null;
  plannedStart?: string | null;
  plannedEnd?: string | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  durationDays?: number | null;
  durationHours?: number | null;
  timezone?: string | null;
  notes?: string | null;
  approvedBy?: LeaveUserSummary | null;
  createdBy?: LeaveUserSummary | null;
  cancelledBy?: LeaveUserSummary | null;
  updatedAt?: string | null;
  createdAt?: string | null;
  managerApproval?: LeaveApproval;
  hrApproval?: LeaveApproval;
  metadata?: LeaveRequestMetadata | null;
  statusSnapshot?: LeaveStatusSnapshot | null;
  statusLabel?: string | null;
  attachments?: LeaveAttachmentMetadata[] | null;
}

export interface LeaveDashboardSummary {
  onLeaveToday: number;
  upcomingLeaves: number;
  pendingApprovals: number;
  activeLeaves?: number;
  pastDueCheckIns?: number;
  totalLeaveDaysActive?: number;
}

export interface LeaveDashboardResponse {
  summary: LeaveDashboardSummary;
  events: LeaveCalendarEvent[];
}

export interface LeaveApproval {
  reviewerId: string | null;
  reviewer?: LeaveUserSummary | null;
  status: LeaveApprovalStatus;
  decidedAt?: string | null;
  notes?: string | null;
}

export interface LeaveRequest {
  _id: string;
  employeeInfoId: string;
  workflowStatus: LeaveWorkflowStatus;
  classification: LeaveClassification;
  context: LeaveContext;
  requestOrigin?: LeaveRequestOrigin | null;
  reportingChannel?: LeaveReportingChannel | null;
  reasonCode?: LeaveReasonCode | null;
  employmentStatus: string;
  plannedStart: string;
  plannedEnd: string;
  actualStart?: string | null;
  actualEnd?: string | null;
  timezone: string;
  durationDays?: number | null;
  allowanceImpact?: string | null;
  benefitYear?: number | null;
  notes?: string | null;
  requestedBy: LeaveUserSummary;
  managerApproval: LeaveApproval;
  hrApproval: LeaveApproval;
  approvedBy?: LeaveUserSummary | null;
  cancelledBy?: LeaveUserSummary | null;
  employeeInfo?: LeaveEmployeeSummary | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  metadata?: LeaveRequestMetadata | null;
  statusSnapshot?: LeaveStatusSnapshot | null;
  statusLabel?: string | null;
  attachments?: LeaveAttachmentMetadata[] | null;
}

export interface LeaveCalendarRangeInput {
  startDate: string;
  endDate: string;
  timezone?: string;
  classification?: LeaveClassification[];
  contexts?: LeaveContext[];
  workflowStatuses?: LeaveWorkflowStatus[];
  legalEntityIds?: string[];
  departmentIds?: string[];
}

export interface UseLeaveDashboardParams {
  range: LeaveCalendarRangeInput;
  skip?: boolean;
}

export interface UseLeaveDashboardResult {
  summary: LeaveDashboardSummary;
  events: LeaveCalendarEvent[];
  loading: boolean;
  error?: Error;
  refetch: () => Promise<void>;
}
