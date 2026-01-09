export interface HumanSummary {
  _id: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  displayName?: string;
  email?: string;
  primaryEmail?: string;
  phoneNumber?: string;
  status?: string;
  photo?: string;
  profileImage?: string;
  addresses?: AddressSummary[] | null;
}

export interface DepartmentSummary {
  _id: string;
  name?: string;
  code?: string;
  description?: string;
}

export interface LegalEntitySummary {
  _id: string;
  name?: string;
  legalName?: string;
  displayName?: string;
  status?: string;
}

export interface PayPeriodConfigSummary {
  _id: string;
  streamName?: string;
  payGroupName?: string;
  payScheduleName?: string;
  frequency?: string;
  startDate?: string;
  endDate?: string;
}

export interface CompensationSettings {
  payType?: string;
  employmentClassification?: string;
  payRate?: number | null;
  payFrequency?: string;
  currency?: string;
  overtimeEligible?: boolean;
  standardHoursPerWeek?: number | null;
  effectiveDate?: string;
  notes?: string;
}

export interface CompensationSummary {
  payType?: string;
  employmentClassification?: string;
  payRate?: number | null;
  payFrequency?: string;
  payFrequencyLabel?: string | null;
  periodsPerYear?: number | null;
  annualizedRate?: number | null;
  periodicRate?: number | null;
  hourlyRate?: number | null;
  currency?: string;
  overtimeEligible?: boolean;
  standardHoursPerWeek?: number | null;
}

export interface BenefitPlan {
  _id?: string;
  provider?: string;
  planName?: string;
  planType?: string;
  enrollmentType?: string;
  benefitType?: string;
  coverageLevel?: string;
  employerCost?: number | null;
  employeeCost?: number | null;
  effectiveDate?: string;
  endDate?: string;
  isActive?: boolean;
  notes?: string;
  allowanceType?: string;
  accrualMethod?: string;
  annualAllowance?: number | null;
  carryoverLimit?: number | null;
}

export interface BenefitSettings {
  eligibilityDate?: string;
  notes?: string;
  plans?: BenefitPlan[];
}

export interface LeaveBalance {
  allowanceType: string;
  allowedDays: number;
  usedDays: number;
  remainingDays: number;
  benefitYear: number;
  carryoverLimit?: number;
}

export interface TaxSettings {
  ssn?: string | null;
  taxId?: string | null;
  filingStatus?: string | null;
  federalFilingStatus?: string | null;
  stateFilingStatus?: string | null;
  allowances?: number | null;
  federalAllowances?: number | null;
  federalTaxExemptions?: number | null;
  stateAllowances?: number | null;
  stateTaxExemptions?: number | null;
  additionalWithholding?: number | null;
  additionalFederalWithholding?: number | null;
  additionalStateWithholding?: number | null;
  exempt?: boolean | null;
  exemptFromFederal?: boolean | null;
  exemptFromState?: boolean | null;
  state?: string | null;
  locality?: string | null;
  notes?: string | null;
}

export interface UserSummary {
  _id?: string;
  fullName?: string;
  email?: string;
}

export interface EmployeeDocumentMetadata {
  documentType?: string;
  name?: string;
  url?: string;
  uploadDate?: string;
  expiryDate?: string;
  issuedBy?: string;
  notes?: string;
}

export interface EmploymentSummary {
  employeeNumber?: string;
  position?: string;
  employmentType?: string;
  employmentStatus?: string;
  startDate?: string;
  endDate?: string;
}

export interface EmploymentStatusHistoryEntry {
  status?: string;
  changedDate?: string | null;
  note?: string | null;
  changedBy?: UserSummary | null;
}

export interface EmploymentWorkScheduleInput {
  startTime?: string;
  endTime?: string;
  hoursPerWeek?: number | null;
}

export interface EmploymentDetailsInputPayload {
  employeeId?: string;
  position?: string;
  department?: string;
  employmentType?: string;
  employmentStatus?: string;
  startDate?: string;
  endDate?: string;
  probationEndDate?: string;
  reportsTo?: string;
  workLocation?: string;
  workSchedule?: EmploymentWorkScheduleInput | null;
}

export interface AddressSummary {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  zipCode?: string;
  country?: string;
}

export interface EmergencyContactSummary {
  name: string;
  relationship?: string;
  phone?: string;
  email?: string;
  isEmergencyContact?: boolean;
}

export interface EducationEntry {
  institution: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  documentUrl?: string;
}

export interface WorkHistoryReferenceContact {
  name?: string;
  position?: string;
  phone?: string;
  email?: string;
}

export interface WorkHistoryEntry {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description?: string;
  referenceContact?: WorkHistoryReferenceContact | null;
}

export interface CertificationEntry {
  name: string;
  issuingOrganization?: string;
  issueDate?: string;
  expirationDate?: string;
  credentialID?: string;
  credentialURL?: string;
  documentUrl?: string;
}

export interface EmployeeNoteEntry {
  content: string;
  createdBy?: string;
  createdAt?: string;
  category?: string;
  isPrivate?: boolean;
}

export interface PersonalInformationSummary {
  dateOfBirth?: string | null;
  gender?: string | null;
  maritalStatus?: string | null;
  nationality?: string | null;
  visaStatus?: string | null;
  visaExpiryDate?: string | null;
  emergencyContacts?: EmergencyContactSummary[] | null;
}

export interface PayrollOvertimeRulesSummary {
  enabled?: boolean | null;
  weeklyThreshold?: number | null;
  dailyThreshold?: number | null;
  overtimeMultiplier?: number | null;
  doubleTimeThreshold?: number | null;
  doubleTimeMultiplier?: number | null;
  includedInOvertimeCalc?: boolean | null;
}

export interface PayrollEmployerTaxesSummary {
  ficaRate?: number | null;
  medicareRate?: number | null;
  futaRate?: number | null;
  sutaRate?: number | null;
}

export interface PayrollWorkersCompSummary {
  classCode?: string | null;
  rate?: number | null;
  annualPremium?: number | null;
  description?: string | null;
}

export interface PayrollConfigSummary {
  isActive?: boolean | null;
  useTimesheetForSalaried?: boolean | null;
  overtimeEligible?: boolean | null;
  standardHoursPerWeek?: number | null;
  overtimeRules?: PayrollOvertimeRulesSummary | null;
  taxOverrides?: {
    stateTaxRate?: number | null;
    localTaxes?: Array<{
      jurisdiction?: string | null;
      taxRate?: number | null;
      isResident?: boolean | null;
    }> | null;
    disabilityInsurance?: {
      employeeRate?: number | null;
      wageBase?: number | null;
    } | null;
    paidFamilyLeave?: {
      employeeRate?: number | null;
      wageBase?: number | null;
    } | null;
  } | null;
  workersComp?: PayrollWorkersCompSummary | null;
}

export interface BankingInformationSummary {
  accountType?: string;
  bankName?: string;
  accountNumber?: string;
  routingNumber?: string;
  depositPercentage?: number | null;
  isActive?: boolean;
}

export interface EmployeeRecord {
  _id?: string;
  humanId: string;
  organizationId?: string | null;
  tenantOrgId?: string | null;
  employeeInfoId?: string;
  human?: HumanSummary;
  userId?: string;
  user?: UserSummary;
  legalEntityId?: string;
  legalEntity?: LegalEntitySummary | string | null;
  departmentId?: string;
  department?: DepartmentSummary;
  payPeriodConfigId?: string;
  payPeriodConfig?: PayPeriodConfigSummary | null;
  compensationSettings?: CompensationSettings | null;
  compensationSummary?: CompensationSummary | null;
  benefitSettings?: BenefitSettings | null;
  taxSettings?: TaxSettings | null;
  payrollConfig?: PayrollConfigSummary | null;
  bankingInformation?: BankingInformationSummary[] | null;
  employmentSummary?: EmploymentSummary | null;
  employmentDetails?: EmploymentDetailsInputPayload | null;
  employmentStatusHistory?: EmploymentStatusHistoryEntry[] | null;
  personalInformation?: PersonalInformationSummary | null;
  addressSummary?: AddressSummary | null;
  emergencyContacts?: EmergencyContactSummary[] | null;
  documents?: EmployeeDocumentMetadata[] | null;
  education?: EducationEntry[] | null;
  workHistory?: WorkHistoryEntry[] | null;
  skills?: string[] | null;
  certifications?: CertificationEntry[] | null;
  noteEntries?: EmployeeNoteEntry[] | null;
  notes?: string | null;
  dateOfBirth?: string | null;
  customFields?: Record<string, any> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  addedUser?: UserSummary | null;
  modifiedUser?: UserSummary | null;
  status?: string | null;
  isPayrollReady?: boolean | null;
  configurationWarnings?: string[];
  leaveBalances?: LeaveBalance[];
}
