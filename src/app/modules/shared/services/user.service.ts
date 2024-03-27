import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

import { User } from '../models/user';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlerService
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users: User[]) => console.log(users)),
      catchError(this.errorService.handleError<User[]>('users'))
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user).pipe(
      tap((addedUser: User) => console.log(addedUser)),
      catchError(this.errorService.handleError<User>('added user'))
    );
  }
}
