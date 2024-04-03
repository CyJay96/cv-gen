import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core.component';
import { authGuard } from 'src/app/guards/auth.guard';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeCvInfoComponent } from './components/employee-cv-info/employee-cv-info.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'employee-info/:id', component: EmployeeInfoComponent },
      { path: 'employee-cv-info/:id', component: EmployeeCvInfoComponent },
      { path: 'project-list', component: ProjectListComponent },
      { path: 'project-info/:id', component: ProjectInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
