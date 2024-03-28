import { Cv } from './cv';
import { Shared } from './shared';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: Shared;
  specialization: Shared;
  departmentId: number;
  specializationId: number;
  cvs: Cv[];
}
