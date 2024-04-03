import { Injectable } from '@angular/core';

import { Employee } from '../models/responses/employee.interface';
import { EmployeeForm } from '../models/forms/employee-form.interface';
import { EmployeeDto } from '../models/requests/employee-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeMapper {
  toEmployeeForm(employee: Employee): EmployeeForm {
    return {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      department: employee.department?.name,
      specialization: employee.department?.name,
    } as EmployeeDto;
  }

  toEmployeeDto(employeeForm: EmployeeForm): EmployeeDto {
    return {
      firstName: employeeForm.firstName,
      lastName: employeeForm.lastName,
      email: employeeForm.email,
      department: employeeForm.department,
      specialization: employeeForm.department,
    } as EmployeeForm;
  }
}
