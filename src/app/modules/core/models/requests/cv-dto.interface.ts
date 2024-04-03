import { LanguageDto } from './language-dto.interface';
import { ProjectDto } from './project-dto.interface';

export interface CvDto {
  cvName: string;
  language: LanguageDto[];
  skills: string[];
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  specialization: string;
  employeeId: number;
  projects: ProjectDto[];
}
