import { Language } from './language';
import { Project } from './project';
import { Shared } from './shared';

export interface Cv {
  id: number;
  cvName: string;
  language: Language[];
  skills: Shared[];
  firstName: string;
  lastName: string;
  email: string;
  department: Shared;
  specialization: Shared;
  departmentId: number;
  specializationId: number;
  employeeId: number;
  cvsProjects: Project[];
}
