import { Language } from './language.interface';
import { Project } from './project.interface';
import { Shared } from './shared.interface';

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
