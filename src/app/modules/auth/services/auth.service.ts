import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
import { Tokens } from '../models/tokens';
import { ErrorHandlerService } from '../../shared/services/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000/api/auth';

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlerService
  ) {}

  login(userDto: UserDto): Observable<Tokens> {
    return this.http
      .post<Tokens>(this.url + '/login', userDto)
      .pipe(catchError(this.errorService.handleError<any>('login')));
  }

  logout(): Observable<void> {
    return this.http
      .get(this.url + '/logout')
      .pipe(catchError(this.errorService.handleError<any>('logout')));
  }

  refresh(): Observable<Tokens> {
    return this.http
      .get<Tokens>(this.url + '/refresh')
      .pipe(catchError(this.errorService.handleError<any>('refresh')));
  }
}
