import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ErrorHandlerService } from '../../shared/services/error-handler.service';

import { Project } from '../models/responses/project.interface';
import { ProjectDto } from '../models/requests/project-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url: string = 'http://localhost:3000/api/projects';

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlerService
  ) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url).pipe(
      tap((projects: Project[]) => console.log(projects)),
      catchError(this.errorService.handleError<Project[]>('projects'))
    );
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(this.url + `/${id}`).pipe(
      tap((project: Project) => console.log(project)),
      catchError(this.errorService.handleError<Project>(`project id = ${id}`))
    );
  }

  addProject(projectDto: ProjectDto): Observable<Project> {
    return this.http.post<Project>(this.url, projectDto).pipe(
      tap((addedProject: Project) => console.log(addedProject)),
      catchError(this.errorService.handleError<Project>('added project'))
    );
  }

  updateProject(id: number, projectDto: ProjectDto): Observable<Project> {
    return this.http.put<Project>(this.url + `/${id}`, projectDto).pipe(
      tap((updatedProject: Project) => console.log(updatedProject)),
      catchError(this.errorService.handleError<Project>('updated project'))
    );
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete(this.url + `/${id}`).pipe(
      tap((_) => console.log(`deleted project id = ${id}`)),
      catchError(
        this.errorService.handleError<any>(`deleted project id = ${id}`)
      )
    );
  }
}
