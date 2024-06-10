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
  isLoggedIn = false;

  constructor(private router: Router, private dialog: MatDialog, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
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
  }
}
