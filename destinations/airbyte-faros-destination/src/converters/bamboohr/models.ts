export interface User {
  id: string;
  employeeNumber: string;
  jobTitle: string;
  status: string;
  employmentHistoryStatus: string;
  fullName1: string;
  address1?: string;
  address2?: string;
  birthday?: string;
  bestEmail: string;
  workEmail: string;
  workPhone?: string;
  city?: string;
  state?: string;
  stateCode?: string;
  country?: string;
  department?: string;
  ethnicity?: string;
  firstName?: string;
  gender?: string;
  middleName?: string;
  mobilePhone?: string;
  zipcode?: string;
  supervisor?: string;
  // managerId
  supervisorId?: string;
  supervisorEId?: string;
  supervisorEmail?: string;
  payRate?: string;
  payFrequency?: string;
  hireDate?: string;
  terminationDate?: string;
  lastName?: string;
  location?: string;
}
