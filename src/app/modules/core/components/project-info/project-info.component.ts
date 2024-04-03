import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Project } from '../../models/responses/project.interface';
import { ProjectDto } from '../../models/requests/project-dto.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css'],
})
export class ProjectInfoComponent implements OnInit {
  public titleFirstText: string = 'Home / Projects /';
  public titleLastText: string = '';
  public title2: string = 'Projects';
  public title3: string = 'Project info';

  private projectId = Number(this.route.snapshot.paramMap.get('id'));

  public project: Project = null;

  public form: FormGroup;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      projectName: fb.control('', Validators.required),
      startDate: fb.control('', Validators.required),
      endDate: fb.control('', Validators.required),
      teamSize: fb.control('', Validators.required),
      techStack: fb.control('', Validators.required),
      teamRoles: fb.control([], Validators.required),
      description: fb.control([], Validators.required),
      responsibilities: fb.control([], Validators.required),
    });
  }

  ngOnInit(): void {
    this.getProjectById();
    this.setPageHeader();
  }

  setPageHeader(): void {
    this.projectService.getProjectById(this.projectId).subscribe((project) => {
      this.titleLastText = `${project?.projectName}`;
    });
  }

  getProjectById(): void {
    this.projectService.getProjectById(this.projectId).subscribe((project) => {
      this.project = project;
      // this.form.patchValue(this.project);
    });
  }

  getProjectTechSkills(): string {
    return this.project?.techStack?.map((item) => item.name).toString();
  }

  getProjectRoles(): string {
    return this.project?.teamRoles?.map((item) => item.name).toString();
  }

  getProjectResponsibilities(): string {
    return this.project?.responsibilities?.map((item) => item.name).toString();
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }

    this.projectService
      .updateProject(this.projectId, this.form.getRawValue() as ProjectDto)
      .subscribe((_) => {
        this.router.navigateByUrl('/project-list');
      });
  }

  cancel(): void {
    this.router.navigateByUrl('/project-list');
  }
}
