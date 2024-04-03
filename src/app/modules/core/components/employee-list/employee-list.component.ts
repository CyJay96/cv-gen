import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../../models/responses/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public titleFirstText: string = 'Home /';
  public titleLastText: string = 'Employees';
  public title2: string = 'Employees';
  public title3: string = 'Employees list';

  public employees: Employee[] = [];

  constructor(
    private emploueeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.emploueeService
      .getEmployees()
      .subscribe(
        (employees) =>
          (this.employees = employees.sort((a, b) =>
            a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0
          ))
      );
  }

  toEmployeeInfo(id: number): void {
    this.router.navigateByUrl(`employee-info/${id}`);
  }

  addEmployee(): void {}
}
