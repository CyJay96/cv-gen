import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Employee } from '../../models/responses/employee.interface';
import { EmployeeForm } from '../../models/forms/employee-form.interface';
import { EmployeeDto } from '../../models/requests/employee-dto.interface';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeMapper } from '../../mappers/employee.mapper';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
})
export class EmployeeInfoComponent implements OnInit {
  public titleFirstText: string = 'Home / Employees /';
  public titleLastText: string = '';
  public title2: string = 'Employees';
  public title3: string = '';

  private employeeId = Number(this.route.snapshot.paramMap.get('id'));

  public employee: Employee = null;
  public employeeForm: EmployeeForm = null;

  public form: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private employeeMapper: EmployeeMapper,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      firstName: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required),
      email: fb.control('', Validators.required),
      specialization: fb.control('', Validators.required),
      department: fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getEmployeeById();
    this.setPageHeader();
  }

  setPageHeader(): void {
    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((employee) => {
        this.titleLastText = `${employee?.firstName} ${employee?.lastName}`;
        this.title3 = `${employee?.firstName} ${employee?.lastName}'s profile`;
      });
  }

  getEmployeeById(): void {
    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((employee) => {
        this.employee = employee;
        this.employeeForm = this.employeeMapper.toEmployeeForm(employee);
        this.form.patchValue(this.employeeForm);
      });
  }

  toEmployeeCvs(): void {
    this.router.navigateByUrl(`/employee-cv-info/${this.employeeId}`);
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }

    const employeeDto: EmployeeDto = this.employeeMapper.toEmployeeDto(
      this.form.getRawValue() as EmployeeForm
    );

    this.employeeService
      .updateEmployee(this.employeeId, employeeDto)
      .subscribe((_) => {
        this.router.navigateByUrl('/employee-list');
      });
  }

  cancel(): void {
    this.router.navigateByUrl('/employee-list');
  }
}
