import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SignUpModalComponent } from '../../../../auth/sign-up-modal/sign-up-modal.component';
import { AuthService } from '../../../../auth/sign-up-modal/services/auth.service';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss']
})
export class HomePageHeaderComponent implements OnInit {

  pageIsMain = true;
  headerShow = true;
  currentUser = null;
  isSignUp = true;
  isLoggedIn = false; // Add this flag

  constructor(
    private router: Router,
    private translate: TranslateService,
    private dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.pageIsMain = this.router.url === '/';
    this.checkLoginStatus();
  }


  // logIn(): void {
  //   // Open the login dialog
  //   this.dialog.open(SignUpModalComponent, {
  //     data: {}
  //   });
  // }

  // signUp(): void {
  //   this.dialog.open(SignUpModalComponent, {
  //     data: {}
  //   });
  // }


  navigateToMainPage(): void {
    this.router.navigate(['/']).then();
  }

  navigateToTilPage(): void {
    this.handleNavigation('/qazaqTili');
  }

  navigateToTarihPage(): void {
    this.handleNavigation('/qazaqTarihMap');
  }

  navigateToDasturPage(): void {
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
    this.authService.logout(); // Call the logout method in the AuthService
    this.isLoggedIn = false; // Update the logged-in state
    this.router.navigate(['/']).then(); // Redirect to home or login page after logout
  }
}