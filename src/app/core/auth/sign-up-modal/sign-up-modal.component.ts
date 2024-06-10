import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent {

  @Output() loginSuccess = new EventEmitter<void>();  // Event emitter for successful login

  isSignUp = true;
  addSlideUpClass = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<SignUpModalComponent>
  ) {}

  toggleSlideUpClass() {
    this.addSlideUpClass = !this.addSlideUpClass;
  }

  logIn(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      data => {
        console.log("Is Login Success: ", data);
        if (data.message === 'success') {
          this.loginSuccess.emit();  // Emit event on successful login
          this.closeModal();
        }
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  signUp(name: string, email: string, password: string) {
    this.authService.register(name, email, password).subscribe(
      data => {
        console.log("Is Signup Success: ", data);
        if (data.message === 'success') {
          this.loginSuccess.emit();  // Emit event on successful signup
          this.closeModal();
        }
      },
      error => {
        console.error('Signup failed', error);
      }
    );
  }

  closeModal() {
    this.dialogRef.close();  // Close the modal
  }
}
