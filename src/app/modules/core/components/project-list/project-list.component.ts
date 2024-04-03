import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../../models/responses/project.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  public titleFirstText: string = 'Home /';
  public titleLastText: string = 'Projects';
  public title2: string = 'Projects';
  public title3: string = 'Project list';

  public projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe(
        (projects) =>
          (this.projects = projects.sort((a, b) =>
            a.projectName > b.projectName
              ? 1
              : a.projectName < b.projectName
              ? -1
              : 0
          ))
      );
  }

  toProjectInfo(id: number): void {
    this.router.navigateByUrl(`project-info/${id}`);
  }

  addProject(): void {}
}
