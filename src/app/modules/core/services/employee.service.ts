import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ErrorHandlerService } from '../../shared/services/error-handler.service';

import { Employee } from '../models/responses/employee.interface';
import { EmployeeDto } from '../models/requests/employee-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url: string = 'http://localhost:3000/api/employees';

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlerService
  ) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url).pipe(
      tap((employees: Employee[]) => console.log(employees)),
      catchError(this.errorService.handleError<Employee[]>('employees'))
    );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.url + `/${id}`).pipe(
      tap((employee: Employee) => console.log(employee)),
      catchError(this.errorService.handleError<Employee>(`employee id = ${id}`))
    );
  }

  addEmployee(employeeDto: EmployeeDto): Observable<Employee> {
    return this.http.post<Employee>(this.url, employeeDto).pipe(
      tap((addedEmployee: Employee) => console.log(addedEmployee)),
      catchError(this.errorService.handleError<Employee>('added employee'))
    );
  }

  updateEmployee(id: number, employeeDto: EmployeeDto): Observable<Employee> {
    return this.http.put<Employee>(this.url + `/${id}`, employeeDto).pipe(
      tap((updatedEmployee: Employee) => console.log(updatedEmployee)),
      catchError(this.errorService.handleError<Employee>('updated employee'))
    );
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete(this.url + `/${id}`).pipe(
      tap((_) => console.log(`deleted employee id = ${id}`)),
      catchError(
        this.errorService.handleError<any>(`deleted employee id = ${id}`)
      )
    );
  }
}
