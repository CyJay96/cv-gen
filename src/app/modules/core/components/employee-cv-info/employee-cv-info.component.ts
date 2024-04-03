import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Cv } from '../../models/responses/cv.interface';
import { CvService } from '../../services/cv.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-cv-info',
  templateUrl: './employee-cv-info.component.html',
  styleUrls: ['./employee-cv-info.component.css'],
})
export class EmployeeCvInfoComponent implements OnInit {
  public titleFirstText: string = 'Home / Employees /';
  public titleLastText: string = '';
  public title2: string = 'Employees';
  public title3: string = '';

  private employeeId = Number(this.route.snapshot.paramMap.get('id'));

  public cvs: Cv[];
  public currentCv: Cv = null;

  public form: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private cvService: CvService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required),
      skills: fb.control('', Validators.required),
      specialization: fb.control('', Validators.required),
      department: fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getCvsByEmployeeId();
    this.setPageHeader();
  }

  setPageHeader(): void {
    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((employee) => {
        this.titleLastText = `${employee?.firstName} ${employee?.lastName}`;
        this.title3 = `${employee?.firstName} ${employee?.lastName}'s profile`;
      });
  }

  getCvsByEmployeeId(): void {
    this.cvService.getCvs().subscribe((cvs) => {
      cvs = cvs.filter((cv) => cv.employeeId === this.employeeId);
      this.cvs = cvs.sort((a, b) =>
        a.cvName > b.cvName ? 1 : a.cvName < b.cvName ? -1 : 0
      );
      this.currentCv = cvs?.at(0);
    });
  }

  setCurrentCv(cv: Cv): void {
    this.currentCv = cv;
  }

  deleteCvById(id: number): void {
    this.cvs = this.cvs.filter((cv) => cv.id !== id);
    this.cvService.deleteCv(id);
  }

  getCurrentCvSkills(): string {
    return this.currentCv?.skills?.map((skill) => skill.name).toString();
  }

  addProject(): void {}

  deleteProjectById(id: number): void {}

  toEmployeeInfo(): void {
    this.router.navigateByUrl(`/employee-info/${this.employeeId}`);
  }

  save(): void {
    this.router.navigateByUrl('/employee-list');
  }

  cancel(): void {
    this.router.navigateByUrl('/employee-list');
  }
}
