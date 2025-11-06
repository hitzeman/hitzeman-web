import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', this.formData);
    this.submitted = true;

    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 3000);
  }
}
