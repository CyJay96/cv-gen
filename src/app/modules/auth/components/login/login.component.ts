import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserDto } from '../../models/user-dto';
import { Tokens } from '../../models/tokens';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public userDto: UserDto = null;

  public form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: fb.control('', Validators.required),
      password: fb.control('', Validators.required),
    });
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.getRawValue() as UserDto)
      .subscribe((tokens: Tokens) => {
        localStorage.setItem('email', this.form.getRawValue().email);
        localStorage.setItem('access_token', tokens?.access_token);
        localStorage.setItem('refresh_token', tokens?.refresh_token);
        this.router.navigateByUrl('/dashboard');
      });
  }
}
