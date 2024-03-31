import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCvInfoComponent } from './employee-cv-info.component';

describe('EmployeeCvInfoComponent', () => {
  let component: EmployeeCvInfoComponent;
  let fixture: ComponentFixture<EmployeeCvInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCvInfoComponent],
    });
    fixture = TestBed.createComponent(EmployeeCvInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
