import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-open-dialog-sandyq',
  templateUrl: './open-dialog-sandyq.component.html',
  styleUrl: './open-dialog-sandyq.component.scss'
})
export class OpenDialogSandyqComponent {
  constructor(public dialog: MatDialog) {}
}
