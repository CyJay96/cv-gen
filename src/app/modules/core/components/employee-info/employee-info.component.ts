import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Employee } from '../../models/employee';
import { EmployeeDto } from '../../models/emplyee-dto';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeMapper } from '../../mappers/employee.mapper';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
})
export class EmployeeInfoComponent implements OnInit {
  private employeeId = Number(this.route.snapshot.paramMap.get('id'));

  public employee: Employee = null;
  public employeeDto: EmployeeDto = null;

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
  }

  getEmployeeById(): void {
    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((employee) => {
        this.employee = employee;
        this.employeeDto = this.employeeMapper.toEmployeeDto(employee);
        this.form.patchValue(this.employeeDto);
      });
  }

  toEmployeeCvs(): void {
    this.router.navigateByUrl(`/employee-cv-info/${this.employeeId}`);
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }

    this.employeeService
      .updateEmployee(this.employeeId, this.form.getRawValue() as EmployeeDto)
      .subscribe((_) => {
        this.router.navigateByUrl('/employee-list');
      });
  }

  cancel(): void {
    this.router.navigateByUrl('/employee-list');
  }
}
