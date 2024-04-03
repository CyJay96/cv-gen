import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css'],
})
export class SiderComponent {
  public isDashboardPage: boolean =
    window.location.pathname.includes('dashboard');
  public isEmployeePage: boolean =
    window.location.pathname.includes('employee');
  public isProjectPage: boolean = window.location.pathname.includes('project');

  constructor(private router: Router) {}

  toDashboardPage(): void {
    this.router.navigateByUrl('dashboard');
  }

  toEmployeesPage(): void {
    this.router.navigateByUrl('employee-list');
  }

  toProjectsPage(): void {
    this.router.navigateByUrl('project-list');
  }
}
