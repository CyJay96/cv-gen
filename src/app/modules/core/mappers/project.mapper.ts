import { Injectable } from '@angular/core';

import { Project } from '../models/responses/project.interface';
import { ProjectDto } from '../models/requests/project-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectMapper {
  toProjectDto(project: Project): ProjectDto {
    return {
      projectName: project.projectName,
      description: project.description,
      startDate: project.startDate,
      endDate: project.endDate,
      teamSize: project.teamSize,
      techStack: project.techStack?.map((item) => item.name),
      responsibilities: project.responsibilities?.map((item) => item.name),
      teamRoles: project.teamRoles?.map((item) => item.name),
    } as ProjectDto;
  }

  // toProjectDtoFromForm(project: any): ProjectDto {
  //   return {
  //     projectName: project.projectName,
  //     description: project.description,
  //     startDate: project.startDate,
  //     endDate: project.endDate,
  //     teamSize: +project.teamSize,
  //     techStack: typeof project.techStack === 'string' ? project.techStack,
  //     responsibilities: project.responsibilities?.map((item) => item.name),
  //     teamRoles: project.teamRoles?.map((item) => item.name),
  //   } as ProjectDto;
  // }
}
