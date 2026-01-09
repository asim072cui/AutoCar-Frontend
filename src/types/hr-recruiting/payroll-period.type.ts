import type { PayPeriodConfigSummary, LegalEntitySummary, DepartmentSummary } from './employee-record.type';

export type PayrollStatus = 'draft' | 'submitted' | 'approved' | 'processed' | 'paid' | 'cancelled';

export interface PayrollHours {
  regular?: number;
  overtime?: number;
  doubleTime?: number;
  pto?: number;
  holiday?: number;
  sick?: number;
  other?: number;
  total?: number;
}

export interface PayrollRates {
  regular?: number;
  overtime?: number | null;
  doubleTime?: number | null;
}

export interface GrossPayBreakdown {
  regular?: number;
  overtime?: number;
  doubleTime?: number;
  pto?: number;
  holiday?: number;
  sick?: number;
  bonuses?: number;
  commissions?: number;
  adjustments?: number;
  total?: number;
}

export interface BenefitDeduction {
  type: string;
  amount: number;
  description?: string | null;
}

export interface OtherDeduction {
  description: string;
  amount: number;
}

export interface PayrollDeductions {
  federalTax?: number;
  stateTax?: number;
  localTax?: number;
  socialSecurity?: number;
  medicare?: number;
  benefits?: BenefitDeduction[];
  garnishments?: number;
  other?: OtherDeduction[];
  total?: number;
}

export interface BenefitCost {
  type: string;
  amount: number;
  description?: string | null;
}

export interface OtherCost {
  description: string;
  amount: number;
}

export interface EmployerCosts {
  socialSecurity?: number;
  medicare?: number;
  futa?: number;
  suta?: number;
  workersComp?: number;
  benefits?: BenefitCost[];
  other?: OtherCost[];
  total?: number;
}

export interface YearToDateTotals {
  grossPay?: number;
  netPay?: number;
  federalTax?: number;
  stateTax?: number;
  socialSecurity?: number;
  medicare?: number;
}

export interface TaskAllocation {
  projectTaskId?: string | null;
  projectDeliverableId?: string | null;
  allocationPercent?: number;
  allocatedSeconds?: number;
  loadedCostCents?: number;
}

export interface EmployeePayrollEntry {
  employeeInfoId: string;
  humanId?: string;
  userId?: string | null;
  timesheetId?: string | null;
  employeeName: string;
  employeeId?: string | null;
  department?: string | null;
  position?: string | null;
  hours?: PayrollHours;
  rates?: PayrollRates;
  grossPay?: GrossPayBreakdown;
  deductions?: PayrollDeductions;
  netPay?: number;
  employerCosts?: EmployerCosts;
  fullyLoadedCost?: number;
  yearToDate?: YearToDateTotals | null;
  taskAllocations?: TaskAllocation[];
  notes?: string | null;
  adjustmentReason?: string | null;
}

export interface PayrollPeriodTotals {
  employeeCount?: number;
  totalRegularHours?: number;
  totalOvertimeHours?: number;
  totalHours?: number;
  totalGrossPay?: number;
  totalEmployeeDeductions?: number;
  totalNetPay?: number;
  totalEmployerTaxes?: number;
  totalEmployerBenefits?: number;
  totalEmployerCosts?: number;
  totalFullyLoadedCost?: number;
}

export interface DepartmentBreakdown {
  departmentId: string;
  departmentName: string;
  employeeCount: number;
  totalHours: number;
  totalGrossPay: number;
  totalNetPay: number;
  totalFullyLoadedCost: number;
}

export interface PayTypeBreakdown {
  payType: string;
  employeeCount: number;
  totalGrossPay: number;
  totalNetPay: number;
  totalFullyLoadedCost: number;
}

export interface PayrollBreakdown {
  byDepartment?: DepartmentBreakdown[];
  byPayType?: PayTypeBreakdown[];
}

export interface PayrollAdjustmentChangeRecord {
  previous?: number;
  current?: number;
}

export interface PayrollAdjustmentLog {
  date: string;
  reason: string;
  adjustedBy: string;
  changes?: Record<string, PayrollAdjustmentChangeRecord | number | string | null> | null;
  notes?: string | null;
}

export interface PayrollLineItemInput {
  type?: string | null;
  description?: string | null;
  amount: number;
}

export interface PayrollOtherLineItemInput {
  description?: string | null;
  amount: number;
}

export interface PayrollGrossPayInput extends Partial<GrossPayBreakdown> {}

export interface PayrollDeductionsInput extends Omit<Partial<PayrollDeductions>, 'benefits' | 'other'> {
  benefits?: PayrollLineItemInput[];
  other?: PayrollOtherLineItemInput[];
}

export interface PayrollEmployerCostsInput extends Omit<Partial<EmployerCosts>, 'benefits' | 'other'> {
  benefits?: PayrollLineItemInput[];
  other?: PayrollOtherLineItemInput[];
}

export interface PayrollHoursInput extends Partial<PayrollHours> {}

export interface PayrollRatesInput extends Partial<PayrollRates> {}

export interface PayrollExportLog {
  exportedAt: string;
  exportedBy?: string | null;
  exportType: string;
  fileName?: string | null;
  status: string;
  notes?: string | null;
}

export interface PayrollPeriodInstance {
  _id: string;
  payPeriodConfigId: string;
  payPeriodConfig?: PayPeriodConfigSummary | null;
  legalEntityId: string;
  legalEntity?: LegalEntitySummary | string | null;
  tenantOrgId: string;
  periodStart: string;
  periodEnd: string;
  payDate?: string;
  periodNumber?: number;
  periodName?: string;
  fiscalYear: number;
  fiscalQuarter?: number;
  departmentId?: string | null;
  department?: DepartmentSummary | null;
  employees: EmployeePayrollEntry[];
  totals?: PayrollPeriodTotals;
  breakdown?: PayrollBreakdown;
  status: PayrollStatus;
  generatedAt?: string;
  generatedBy?: string;
  submittedAt?: string;
  submittedBy?: string;
  approvedAt?: string;
  approvedBy?: string;
  processedAt?: string;
  processedBy?: string;
  paidAt?: string;
  cancelledAt?: string;
  cancelledBy?: string;
  cancellationReason?: string | null;
  adjustments?: PayrollAdjustmentLog[];
  exports?: PayrollExportLog[];
  notes?: string | null;
  isActive?: boolean;
  canEdit?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface PayrollPeriodsResponse {
  success: boolean;
  message?: string | null;
  data: PayrollPeriodInstance[];
}

export interface PayrollPeriodResponse {
  success: boolean;
  message?: string | null;
  data?: PayrollPeriodInstance;
}

export interface UpdatePayrollEmployeeInput {
  payrollPeriodId: string;
  employeeInfoId: string;
  adjustments?: number;
  adjustmentReason?: string;
  notes?: string;
  hours?: PayrollHoursInput;
  rates?: PayrollRatesInput;
  grossPay?: PayrollGrossPayInput;
  deductions?: PayrollDeductionsInput;
  employerCosts?: PayrollEmployerCostsInput;
}

export interface ExportPayrollInput {
  payrollPeriodId: string;
  exportType: string;
  fileName?: string;
}
