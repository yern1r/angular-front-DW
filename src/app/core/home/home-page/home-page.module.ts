import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { QazaqTilPageComponent } from '../language/qazaq-til-page.component';
import { HomePageFooterComponent } from './footer/home-page-footer/home-page-footer.component';
import { HomePageHeaderComponent } from './header/home-page-header/home-page-header.component'; // Importing HomePageHeaderComponent
import { HomePageComponent } from './home-page/home-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [
    QazaqTilPageComponent,
    HomePageFooterComponent,
    HomePageHeaderComponent, // Declare HomePageHeaderComponent
    HomePageComponent,
    
  ],
  exports: [
    QazaqTilPageComponent,
    HomePageFooterComponent,
    HomePageHeaderComponent, // Export if needed elsewhere
    HomePageComponent,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }
  ]
})
export class HomePageModule { }
