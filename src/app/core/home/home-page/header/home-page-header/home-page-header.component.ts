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

  isLoggedIn = false;


  constructor(
    private router: Router,
    private translate: TranslateService,
    private dialog: MatDialog,
    private authService: AuthService

  ) {}

  ngOnInit(): void {
    this.pageIsMain = this.router.url === '/';
    this.authService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

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

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpModalComponent, {
      width: '350px',
    });

    dialogRef.componentInstance.loginSuccess.subscribe(() => {
      this.isLoggedIn = true;

    });
  }

  logout(): void {

    this.authService.logout();
    this.navigateToMainPage();

  }
}