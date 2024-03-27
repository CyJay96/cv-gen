import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedComponent } from './shared.component';

describe('SharedComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SharedComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SharedComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
