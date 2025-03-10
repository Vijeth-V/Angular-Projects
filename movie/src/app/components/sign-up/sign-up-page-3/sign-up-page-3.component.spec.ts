import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPage3Component } from './sign-up-page-3.component';

describe('SignUpPage3Component', () => {
  let component: SignUpPage3Component;
  let fixture: ComponentFixture<SignUpPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpPage3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
