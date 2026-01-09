export type WorkSessionAllocationStatus =
  | 'unallocated'
  | 'partial'
  | 'balanced'
  | 'locked';

export interface WorkSessionTaskAllocation {
  _id?: string;
  projectTaskId: string;
  projectDeliverableId?: string;
  allocatedSeconds: number;
  allocatedOvertimeSeconds?: number;
  allocationSource?: 'worker' | 'manager';
  allocationPercent?: number;
  allocatedBy?: {
    _id?: string;
    fullName?: string;
    displayName?: string;
  };
  allocatedAt?: string;
  notes?: string;
  locked?: boolean;
  timesheetId?: string;
  payrollPeriodInstanceId?: string;
  loadedCostCents?: number;
}

export interface WorkSession {
  _id: string;
  status: string;
  totalHours?: number;
  activeHours?: number;
  breakSeconds?: number;
  overtimeSeconds?: number;
  teamMember: {  // Required field
    _id?: string;
    firstName?: string;
    lastName?: string;
    profileImage?: string;
    displayName?: string;
  };
  project: {  // Required field
    _id?: string;
    name?: string;
  };
  sessionDate: string;  // Required field
  checkIn: {  // Required field
    timestamp: string;  // Required field
    location?: {
      latitude?: number;
      longitude?: number;
      accuracy?: number;
      address?: string;
    };
    method?: string;
    deviceInfo?: {
      deviceId?: string;
      platform?: string;
      appVersion?: string;
      batteryLevel?: number;
    };
  };
  checkOut?: {
    timestamp?: string;
    location?: {
      latitude?: number;
      longitude?: number;
      accuracy?: number;
      address?: string;
    };
    method?: string;
    autoCheckoutReason?: string;
  };
  locationPings?: Array<{
    timestamp: string;
    location?: {
      latitude?: number;
      longitude?: number;
      address?: string;
    };
    isActive?: boolean;
    batteryLevel?: number;
  }>;
  duration?: {
    totalSeconds?: number;
    totalHours?: number;
    activeHours?: number;
    breakSeconds?: number;
    overtimeSeconds?: number;
    potentialOvertimeSeconds?: number;
    doubleTimeSeconds?: number;
  };
  billable?: boolean;
  notes?: string;
  disputeReason?: string;
  rejectionReason?: string;
  billingRate?: number;
  timesheetId?: string;
  employeeCompensation?: {
    payType?: string;
    payRate?: number;
    regularRate?: number;
    overtimeRate?: number;
    currency?: string;
  };
  primaryProjectTaskId?: string;
  allocationStatus?: WorkSessionAllocationStatus;
  allocatedSeconds?: number;
  unallocatedSeconds?: number;
  allocationVarianceSeconds?: number;
  taskAllocations?: WorkSessionTaskAllocation[];
  estimatedRegularPay?: number;
  estimatedOvertimePay?: number;
  estimatedTotalPay?: number;
  estimatedPayDisplay?: string;
  addedUser?: {
    fullName?: string;
  };
  modifiedUser?: {
    fullName?: string;
  };
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
}

export interface WorkSessionStatusSummary {
  totalSessions: number;
  clockedIn: number;
  clockedOut: number;
  completed: number;
  approved: number;
  flagged: number;
  inTimesheet: number;
  paid: number;
  billableSessions: number;
  nonBillableSessions: number;
}

export interface WorkSessionHourSummary {
  totalHours: number;
  billableHours: number;
  nonBillableHours: number;
  overtimeHours: number;
  allocatedHours: number;
  unallocatedHours: number;
}

export interface WorkSessionProjectRollup {
  projectId?: string;
  projectName: string;
  projectCode?: string | null;
  totalSessions: number;
  activeSessions: number;
  flaggedSessions: number;
  totalHours: number;
  billableHours: number;
  unallocatedHours: number;
  totalLaborCostCents: number;
  lastSessionAt?: string | null;
}

export interface WorkSessionSummary {
  totals: WorkSessionStatusSummary;
  hours: WorkSessionHourSummary;
  projectRollup: WorkSessionProjectRollup[];
  generatedAt: string;
  laborCostCents: number;
}
