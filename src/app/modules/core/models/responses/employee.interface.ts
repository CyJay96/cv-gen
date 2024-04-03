import { Cv } from './cv.interface';
import { Shared } from './shared.interface';

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
