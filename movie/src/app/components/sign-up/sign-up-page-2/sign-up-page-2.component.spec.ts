import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPage2Component } from './sign-up-page-2.component';

describe('SignUpPage2Component', () => {
  let component: SignUpPage2Component;
  let fixture: ComponentFixture<SignUpPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
