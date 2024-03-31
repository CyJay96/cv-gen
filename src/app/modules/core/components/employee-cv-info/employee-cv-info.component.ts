import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-cv-info',
  templateUrl: './employee-cv-info.component.html',
  styleUrls: ['./employee-cv-info.component.css'],
})
export class EmployeeCvInfoComponent implements OnInit {
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
      email: fb.control('', Validators.required),
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
        // this.form.patchValue(this.employee);
      });
  }

  toEmployeeInfoById(): void {
    this.router.navigateByUrl(`/employee-info/${this.employeeId}`);
  }

  toEmployeeList(): void {
    this.location.back();
  }
}
