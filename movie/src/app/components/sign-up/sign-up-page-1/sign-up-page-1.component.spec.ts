import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPage1Component } from './sign-up-page-1.component';

describe('SignUpPage1Component', () => {
  let component: SignUpPage1Component;
  let fixture: ComponentFixture<SignUpPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpPage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
