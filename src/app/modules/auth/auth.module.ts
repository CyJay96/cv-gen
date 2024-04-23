import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
  ],
  providers: [],
  bootstrap: [AuthComponent],
})
export class AuthModule {}
