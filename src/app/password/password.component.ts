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
    const sections = this.passwordService.calculateStrength(this.password);
    this.updateSections(sections[0], sections[1], sections[2]);
  }

  private updateSections(section1: string, section2: string, section3: string) {
    const sections = document.getElementsByClassName('password__indicator-section');
    sections[0].className = `password__indicator-section ${section1}`;
    sections[1].className = `password__indicator-section ${section2}`;
    sections[2].className = `password__indicator-section ${section3}`;
  }
}
