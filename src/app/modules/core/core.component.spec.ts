import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreComponent } from './core.component';

describe('CoreComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CoreComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoreComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
