import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SignUpModalComponent } from '../../../../auth/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrl: './home-page-header.component.scss'
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
  ){}

  ngOnInit(): void {
    if (this.router.url !== '/') {
      this.pageIsMain = false;
    }
  }

  logIn(): void {
    this.dialog.open(SignUpModalComponent, {
      data: {}
    });
  }  
  signUp(){
    this.dialog.open(SignUpModalComponent, {
      data: {}
    });
  }

  public navigateToMainPage(): void {
    this.router.navigate(['/']).then();
  }
}
