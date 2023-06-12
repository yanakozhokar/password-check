import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordStrengthComponent {
 password: string = '';

  calculateStrength() {
    if (!this.password.length) {
      this.updateSections('gray', 'gray', 'gray');
      return;
    }

    if (this.password.length < 8) {
      this.updateSections('red', 'red', 'red');
      return;
    }

    if (this.isStrongPassword()) {
      this.updateSections('green', 'green', 'green');
    } else if (this.isMediumPassword()) {
      this.updateSections('yellow', 'yellow', 'gray');
    } else {
      this.updateSections('red', 'gray', 'gray');
    }
  }

  updateSections(section1: string, section2: string, section3: string) {
    const sections = document.getElementsByClassName('section');
    sections[0].className = `section ${section1}`;
    sections[1].className = `section ${section2}`;
    sections[2].className = `section ${section3}`;
  }

  hasLetters() {
    return /[a-zA-Z]/.test(this.password);
  }

  hasDigits() {
    return /[0-9]/.test(this.password);
  }

hasSymbols() {
  return /[^\w]/.test(this.password);
}


  isStrongPassword() {
    return this.hasLetters() && this.hasDigits() && this.hasSymbols();
  }

  isMediumPassword() {
    const hasLetters = this.hasLetters();
    const hasDigits = this.hasDigits();
    const hasSymbols = this.hasSymbols();

    return (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    );
  }
}