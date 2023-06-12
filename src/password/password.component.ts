import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordStrengthComponent {
  password: string = '';
  strengthSection: number = -1;

  calculatePasswordStrength() {
    const passwordLength = this.password.length;

    if (passwordLength === 0 || passwordLength < 8) {
      this.strengthSection = 0;
    } else if (passwordLength >= 8 && passwordLength < 12) {
      this.strengthSection = 1;
    } else {
      this.strengthSection = 2;
    }
  }
}
