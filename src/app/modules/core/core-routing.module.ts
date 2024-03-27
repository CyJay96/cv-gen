import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core.component';
import { authGuard } from 'src/app/guards/auth.guard';

import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [authGuard()],
    children: [{ path: 'employee-info', component: EmployeeInfoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
