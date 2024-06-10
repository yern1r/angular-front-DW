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
  }

  // logIn(): void {
  //   // Open the login dialog
  //   this.dialog.open(SignUpModalComponent, {
  //     data: {}
  //   });
  // }

  signUp(): void {
    this.dialog.open(SignUpModalComponent, {
      data: {}
    });
  }

  // attemptLogin() {
  //   this.authService.login2().subscribe(
  //     response => {
  //       if(response.message === 'success'){
  //         this.isLoggedIn = true;
  //         this.isSignUp = false;
  //       }
  //       console.log('Login successful:', response);
  //       // Handle successful login response here
  //     },
  //     error => {
  //       console.error('Login failed:', error);
  //       // Handle error response here
  //     }
  //   );
  // }

  navigateToMainPage(): void {
    this.router.navigate(['/']).then();
  }

  navigateToDasturPage(): void {
    this.router.navigate(['/qazaqDastur']).then();
  }

  navigateToTarihPage(): void {
    this.router.navigate(['/qazaqTarihMap']).then();
  }

  navigateToTilPage(): void {
    this.router.navigate(['/qazaqTili']).then();
  }
}