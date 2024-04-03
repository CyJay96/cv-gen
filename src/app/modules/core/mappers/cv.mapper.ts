import { Injectable } from '@angular/core';

import { Cv } from '../models/responses/cv.interface';
import { CvDto } from '../models/requests/cv-dto.interface';
import { ProjectMapper } from './project.mapper';

@Injectable({
  providedIn: 'root',
})
export class CvMapper {
  constructor(private projectMapper: ProjectMapper) {}

  toCvDto(cv: Cv): CvDto {
    return {
      cvName: cv.cvName,
      language: [],
      skills: cv.skills.map((item) => item.name),
      firstName: cv.firstName,
      lastName: cv.lastName,
      email: cv.email,
      department: cv.department?.name,
      specialization: cv.specialization?.name,
      employeeId: cv.employeeId,
      projects: cv.cvsProjects.map((item) =>
        this.projectMapper.toProjectDto(item)
      ),
    } as CvDto;
  }
}
