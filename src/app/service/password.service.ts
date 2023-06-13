import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  calculateStrength(password: string): string[] {
    if (!password.length) {
      return ['gray', 'gray', 'gray'];
    }

    if (password.length < 8) {
      return ['red', 'red', 'red'];
    }

    if (this.isStrongPassword(password)) {
      return ['green', 'green', 'green'];
    } else if (this.isMediumPassword(password)) {
      return ['yellow', 'yellow', 'gray'];
    } else {
      return ['red', 'gray', 'gray'];
    }
  }

  private hasLetters(password: string): boolean {
    return /[a-zA-Z]/.test(password);
  }

  private hasDigits(password: string): boolean {
    return /[0-9]/.test(password);
  }

  private hasSymbols(password: string): boolean {
    return /[^\w]/.test(password);
  }

  private isStrongPassword(password: string): boolean {
    return (
      this.hasLetters(password) &&
      this.hasDigits(password) &&
      this.hasSymbols(password)
    );
  }

  private isMediumPassword(password: string): boolean {
    const hasLetters = this.hasLetters(password);
    const hasDigits = this.hasDigits(password);
    const hasSymbols = this.hasSymbols(password);

    return (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    );
  }
}
