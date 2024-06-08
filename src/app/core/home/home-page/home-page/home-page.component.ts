import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigateTil() {
    this.router.navigate(['/qazaqTili']).then();
  }

  navigateTarih(): void {
    this.router.navigate(['/qazaqTarihMap']).then();
  }

  navigateDastur(): void {
    this.router.navigate(['/qazaqDastur']).then();
  }
}
