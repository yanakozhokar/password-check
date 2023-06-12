import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password.component';

@NgModule({
  declarations: [PasswordStrengthComponent],
  imports: [CommonModule, FormsModule],
  exports: [PasswordStrengthComponent]
})
export class PasswordModule { }
