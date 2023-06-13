import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordService } from '../service/password.service';
import { PasswordStrengthComponent } from './password.component';

@NgModule({
  declarations: [PasswordStrengthComponent],
  imports: [CommonModule, FormsModule],
  exports: [PasswordStrengthComponent],
  providers: [PasswordService]
})
export class PasswordModule {}
