import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordStrengthComponent {
  password: string = '';

  isPasswordEmpty(): boolean {
    return this.password.length === 0;
  }

  isPasswordMedium(): boolean {
    return /^[a-zA-Z0-9]+$/.test(this.password);
  }

  isPasswordStrong(): boolean {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(this.password);
  }

  checkPasswordStrength(): void {
    // No need to do anything here since the template uses the getter methods for evaluation
  }
}
