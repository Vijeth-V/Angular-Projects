import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpPage1Component } from './sign-up-page-1/sign-up-page-1.component';
import { SignUpPage2Component } from './sign-up-page-2/sign-up-page-2.component';
import { SignUpPage3Component } from './sign-up-page-3/sign-up-page-3.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'step1', component: SignUpPage1Component },
  { path: 'step2', component: SignUpPage2Component },
  { path: 'step3', component: SignUpPage3Component },
];

@NgModule({
  declarations: [SignUpPage1Component,
    SignUpPage2Component,
    SignUpPage3Component],
  imports: [
    CommonModule, RouterModule.forChild(routes), CoreModule, ReactiveFormsModule
  ]
})
export class SignUpModule { }
