import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpModalComponent } from '../../../auth/sign-up-modal/sign-up-modal.component';
import { AuthService } from '../../../auth/sign-up-modal/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog, private authService: AuthService) {}

  isLoggedIn = false;

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  navigateTil(): void {
    this.handleNavigation('/qazaqTili');
  }

  navigateTarih(): void {
    this.handleNavigation('/qazaqTarihMap');
  }

  navigateDastur(): void {
    this.handleNavigation('/qazaqDastur');
  }

  handleNavigation(route: string): void {
    if (this.isLoggedIn) {
      this.router.navigate([route]).then();
    } else {
      this.openSignUpModal();
    }
  }

  checkLoginStatus(): void {
    this.authService.attemptLogin().subscribe(
      response => {
        this.isLoggedIn = response.message === 'success';
      },
      error => {
        console.error('Login status check failed:', error);
        this.isLoggedIn = false;
      }
    );
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpModalComponent, {
      width: '350px', // Adjust the width as needed
    });

    dialogRef.componentInstance.loginSuccess.subscribe(() => {
      this.isLoggedIn = true;  // Update the logged-in state
    });
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/']).then(); // Redirect to home or login page after logout
  }
}
