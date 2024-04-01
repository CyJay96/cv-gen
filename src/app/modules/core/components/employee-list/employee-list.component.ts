import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
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
      .subscribe((employees) => (this.employees = employees));
  }

  toEmployeeInfo(id: number): void {
    this.router.navigateByUrl(`employee-info/${id}`);
  }

  addEmployee(): void {}
}
