import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SignUpModalComponent } from '../../../../auth/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss']
})
export class HomePageHeaderComponent implements OnInit {

  pageIsMain = true;
  headerShow = true;
  currentUser = null;
  isSignUp = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.pageIsMain = this.router.url === '/';
  }

  logIn(): void {
    this.dialog.open(SignUpModalComponent, {
      data: {}
    });
  }

  signUp(): void {
    this.dialog.open(SignUpModalComponent, {
      data: {}
    });
  }

  navigateToMainPage(): void {
    this.router.navigate(['/']).then();
  }

  navigateToDasturPage(): void {
    this.router.navigate(['/']).then();
  }

  navigateToTarihPage(): void {
    this.router.navigate(['/']).then();
  }

  navigateToTilPage(): void {
    this.router.navigate(['/qazaqTili']).then();
  }
}
