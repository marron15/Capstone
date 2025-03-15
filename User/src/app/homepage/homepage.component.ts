import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SignupData {
  fullName: string;
  contactNumber: string;
  email: string;
  password: string;
  reEnterPassword: string;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showSignupModal = false;
  signupData: SignupData = {
    fullName: '',
    contactNumber: '',
    email: '',
    password: '',
    reEnterPassword: ''
  };
  showPassword = false;
  showReEnterPassword = false;

  toggleSignupModal(): void {
    this.showSignupModal = !this.showSignupModal;
    if (!this.showSignupModal) {
      // Reset form when closing modal
      this.resetForm();
    }
  }

  togglePasswordVisibility(field: 'password' | 'reEnterPassword'): void {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showReEnterPassword = !this.showReEnterPassword;
    }
  }

  onSubmit(): void {
    if (this.validateForm()) {
      console.log('Form submitted:', this.signupData);
      // Here you'll implement the signup logic
      this.toggleSignupModal();
    }
  }

  private validateForm(): boolean {
    if (this.signupData.password !== this.signupData.reEnterPassword) {
      alert('Passwords do not match!');
      return false;
    }
    return true;
  }

  private resetForm(): void {
    this.signupData = {
      fullName: '',
      contactNumber: '',
      email: '',
      password: '',
      reEnterPassword: ''
    };
    this.showPassword = false;
    this.showReEnterPassword = false;
  }
}
