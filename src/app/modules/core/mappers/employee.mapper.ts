import { Injectable } from '@angular/core';

import { Employee } from '../models/employee';
import { EmployeeDto } from '../models/emplyee-dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeeMapper {
  toEmployeeDto(employee: Employee): EmployeeDto {
    return {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      department: employee.department?.name,
      specialization: employee.department?.name,
    } as EmployeeDto;
  }
}
