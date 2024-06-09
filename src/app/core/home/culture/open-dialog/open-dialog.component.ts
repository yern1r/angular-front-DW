import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrl: './open-dialog.component.scss'
})
export class OpenDialogComponent {

  constructor(public dialog: MatDialog) {}

 
}
