import { Injectable } from '@angular/core';

import { Cv } from '../models/cv';
import { CvDto } from '../models/cv-dto';

@Injectable({
  providedIn: 'root',
})
export class CvMapper {
  // toCvDto(cv: Cv): CvDto {
  //   return {
  //     cvName: cv.cvName,
  // language: LanguageDto[],
  // skills: string[],
  // firstName: string,
  // lastName: string,
  // email: string,
  // department: string,
  // specialization: string,
  // employeeId: number,
  // projects: ProjectDto[],
  //   } as CvDto;
  // }
}
