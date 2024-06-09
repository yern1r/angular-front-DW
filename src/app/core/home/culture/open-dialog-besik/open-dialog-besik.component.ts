import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-open-dialog-besik',
  templateUrl: './open-dialog-besik.component.html',
  styleUrl: './open-dialog-besik.component.scss'
})
export class OpenDialogBesikComponent {

  constructor(public dialog: MatDialog) {}
}
