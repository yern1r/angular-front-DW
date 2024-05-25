import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatDialogModule,
      MatIconModule
    ],
    exports: [  ],
    declarations: [ ],
    providers: [
      { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }]
  })
  export class HomePage { }