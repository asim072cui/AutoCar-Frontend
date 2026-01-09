"use client";
// Employee positions (replacement for enum)
export const EmployeePosition = Object.freeze({
  ServiceAdvisor: "Service Advisor",
  AutoBodyMechanic: "Auto Body Mechanic",
  CarElectrician: "Car Electrician",
  WorkshopManager: "Workshop Manager",
});

// Application statuses
export const ApplicationStatus = Object.freeze({
  Pending: "Pending",
  Reviewed: "Reviewed",
  Shortlisted: "Shortlisted",
  Rejected: "Rejected",
});

// Application types
export const ApplicationType = Object.freeze({
  CV_ONLY: "CV_ONLY",
  FULL_FORM: "FULL_FORM",
});

/**
 * @typedef {Object} Employee
 * @property {string | { $oid: string }} _id
 * @property {string} dreamjob
 * @property {string} workingcity
 * @property {string} position
 * @property {string} img
 * @property {string} firstname
 * @property {string} lastname
 * @property {string | { $date: string }} dob
 * @property {string} country
 * @property {"Male" | "Female" | "Other"} gender
 * @property {string} email
 * @property {string} phone
 * @property {string} jobtitle
 * @property {string} companyname
 * @property {string} comapanyindustry
 * @property {string} joblocation
 * @property {string} jobcity
 * @property {boolean} stillworking
 * @property {string | { $date: string }} startingdate
 * @property {string | { $date: string }} endingdate
 * @property {string} description
 * @property {string} cvUrl
 * @property {string} applicationtype
 * @property {string} status
 * @property {string | { $date: string }} createdAt
 * @property {string | { $date: string }} updatedAt
 */

/**
 * @typedef {Object} DashboardStats
 * @property {number} totalJobs
 * @property {number} totalCompanies
 * @property {number} totalEmployees
 * @property {number} totalHires
 */
