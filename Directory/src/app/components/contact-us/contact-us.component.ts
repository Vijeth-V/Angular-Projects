import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactus: FormGroup;

  submitted: boolean = false;
  submittedData: { name: string; message: string } | null = null; 

  constructor(private fb: FormBuilder) {
    this.contactus = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(): void {
    if (this.contactus.valid) {
      this.submitted = true;
      this.submittedData = this.contactus.value;
      this.contactus.reset();
    }
  }
}
