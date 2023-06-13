import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  constructor() { }

  hasLetters(password: string) {
    return /[a-zA-Z]/.test(password);
  }

  hasDigits(password: string) {
    return /[0-9]/.test(password);
  }

  hasSymbols(password: string) {
    return /[^\w]/.test(password);
  }

  isStrongPassword(password: string) {
    return this.hasLetters(password) && this.hasDigits(password) && this.hasSymbols(password);
  }

  isMediumPassword(password: string) {
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
