import { Component, Input } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss'] // Use styleUrls instead of styleUrl
})

export class SignUpModalComponent {

  isSignUp = true;
  addSlideUpClass = false;

  constructor(private authService: AuthService, private router : Router) {

  }

  toggleSlideUpClass() {
    this.addSlideUpClass = !this.addSlideUpClass;
  }

  logIn(email: string, password: string) {
    this.authService.login(email, password)
      .subscribe(data => {
        console.log("Is Login Success: " + data);
        if (data) this.router.navigate(['/']).then();
      })
    }

  signUp(name: string, email: string, password: string) {
    this.authService.register(email, name, password)
      .subscribe(data => {
        console.log("Is Signup Success: " + data);
        if (data) this.router.navigate(['/']).then();
      })
  }
}
