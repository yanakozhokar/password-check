import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password.component';
import { PasswordService } from '../service/password.service';

@NgModule({
  declarations: [PasswordStrengthComponent],
  imports: [CommonModule, FormsModule],
  providers: [PasswordService],
  exports: [PasswordStrengthComponent]
})
export class PasswordModule { }
