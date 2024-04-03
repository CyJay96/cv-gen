import { Injectable } from '@angular/core';
import { Observable, catchError, from, switchMap, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { AuthService } from '../modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { Tokens } from '../modules/auth/models/tokens';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error?.status === 401 || error?.status === 403) {
          return this.refreshToken(request, next);
        }
        return throwError(() => error);
      })
    );
  }

  refreshToken(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${refresh_token}`,
        },
      });
    }

    return from(this.authService.refresh()).pipe(
      switchMap((tokens: Tokens) => {
        localStorage.setItem('access_token', tokens?.access_token);
        localStorage.setItem('refresh_token', tokens?.refresh_token);
        console.log('token was refreshed');
        return next.handle(request);
      }),

      catchError((error: HttpErrorResponse) => {
        if (error?.status === 401 || error?.status === 403) {
          this.redirectLogout();
        }
        return throwError(() => error);
      })
    );
  }

  redirectLogout() {
    localStorage.removeItem('email');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
