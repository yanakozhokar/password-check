import { Component } from '@angular/core';
import { PasswordService } from '../service/password.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordStrengthComponent {
  password: string = '';

  constructor(private passwordService: PasswordService) {}

  calculateStrength() {
    if (!this.password.length) {
      this.updateSections('gray', 'gray', 'gray');
      return;
    }

    if (this.password.length < 8) {
      this.updateSections('red', 'red', 'red');
      return;
    }

    if (this.passwordService.isStrongPassword(this.password)) {
      this.updateSections('green', 'green', 'green');
    } else if (this.passwordService.isMediumPassword(this.password)) {
      this.updateSections('yellow', 'yellow', 'gray');
    } else {
      this.updateSections('red', 'gray', 'gray');
    }
  }

  updateSections(section1: string, section2: string, section3: string) {
    const sections = document.getElementsByClassName('password__indicator-section');
    sections[0].className = `password__indicator-section ${section1}`;
    sections[1].className = `password__indicator-section ${section2}`;
    sections[2].className = `password__indicator-section ${section3}`;
  }
}
