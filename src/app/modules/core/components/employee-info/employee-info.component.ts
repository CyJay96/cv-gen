import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Employee } from '../../models/employee';
import { EmployeeDto } from '../../models/emplyee-dto';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
})
export class EmployeeInfoComponent implements OnInit {
  private employeeId = Number(this.route.snapshot.paramMap.get('id'));

  public employee: Employee = null;

  public form: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
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
        this.form.patchValue(this.employee);
      });
  }

  toEmployeeCvInfoById(): void {
    this.router.navigateByUrl(`/employee-cv-info/${this.employeeId}`);
  }

  updateEmployee(): void {
    if (this.form.invalid) {
      return;
    }

    this.employeeService
      .updateEmployee(this.employeeId, this.form.getRawValue() as EmployeeDto)
      .subscribe((_) => {
        this.router.navigateByUrl('/employee-list');
      });
  }

  toEmployeeList(): void {
    this.location.back();
  }
}
