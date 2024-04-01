import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ErrorHandlerService } from '../../shared/services/error-handler.service';

import { Cv } from '../models/cv';
import { CvDto } from '../models/cv-dto';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private url: string = 'http://localhost:3000/api/cvs';

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlerService
  ) {}

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.url).pipe(
      tap((cvs: Cv[]) => console.log(cvs)),
      catchError(this.errorService.handleError<Cv[]>('cvs'))
    );
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(this.url + `/${id}`).pipe(
      tap((cv: Cv) => console.log(cv)),
      catchError(this.errorService.handleError<Cv>(`cv id = ${id}`))
    );
  }

  addCv(cvDto: CvDto): Observable<Cv> {
    return this.http.post<Cv>(this.url, cvDto).pipe(
      tap((addedCv: Cv) => console.log(addedCv)),
      catchError(this.errorService.handleError<Cv>('added cv'))
    );
  }

  updateCv(id: number, cvDto: CvDto): Observable<Cv> {
    return this.http.put<Cv>(this.url + `/${id}`, cvDto).pipe(
      tap((updatedCv: Cv) => console.log(updatedCv)),
      catchError(this.errorService.handleError<Cv>('updated cv'))
    );
  }

  deleteCv(id: number): Observable<void> {
    console.log(this.url + `/${id}`);
    return this.http.delete(this.url + `/${id}`).pipe(
      tap((_) => console.log(`deleted cv id = ${id}`)),
      catchError(this.errorService.handleError<any>(`deleted cv id = ${id}`))
    );
  }
}
