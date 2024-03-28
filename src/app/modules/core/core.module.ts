import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';

@NgModule({
  declarations: [CoreComponent, EmployeeListComponent, EmployeeInfoComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [CoreComponent],
})
export class CoreModule {}
