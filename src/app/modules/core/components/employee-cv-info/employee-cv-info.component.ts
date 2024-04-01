import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-employee-cv-info',
  templateUrl: './employee-cv-info.component.html',
  styleUrls: ['./employee-cv-info.component.css'],
})
export class EmployeeCvInfoComponent implements OnInit {
  private employeeId = Number(this.route.snapshot.paramMap.get('id'));

  public cvs: Cv[];
  public currentCv: Cv = null;

  public form: FormGroup;

  constructor(
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
  }

  getCvsByEmployeeId(): void {
    this.cvService.getCvs().subscribe((cvs) => {
      cvs = cvs.filter((cv) => cv.employeeId === this.employeeId);
      this.cvs = cvs;
      if (cvs.length) {
        this.currentCv = cvs.at(0);
      }
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
