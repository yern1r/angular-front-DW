import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizComponent } from '../../language/quiz/quiz/quiz.component';

@Component({
  selector: 'app-culture-page',
  templateUrl: './culture-page.component.html',
  styleUrl: './culture-page.component.scss'
})
export class CulturePageComponent {

  constructor(private dialog: MatDialog){
  
  }

  isGrammatica = false;
  isSozdik = false;
  isPhraza = false;
  isOpened = true;

  openQuizDialog() {
    const dialogRef = this.dialog.open(QuizComponent, {
      width: '80%',
      maxWidth: '600px', 
      height: '80%'
    });

    dialogRef.afterClosed().subscribe((score: number) => {
      console.log('Quiz completed. Score:', score);
    });
  }



resetAllMaterials() {
  this.isGrammatica = false;
  this.isSozdik = false;
  this.isPhraza = false;
}

showPhrazakMaterial() {
  if (!this.isPhraza) { // Only reset if the current state is not active
    this.resetAllMaterials();
  }
  this.isPhraza = !this.isPhraza;
  this.isOpened = !this.isOpened;
}

showSozdikMaterial() {
  if (!this.isSozdik) { // Only reset if the current state is not active
    this.resetAllMaterials();
  }
  this.isSozdik = !this.isSozdik;
  this.isOpened = !this.isOpened;
}

showGrammaticaMaterial() {
  if (!this.isGrammatica) { // Only reset if the current state is not active
    this.resetAllMaterials();
  }
  this.isGrammatica = !this.isGrammatica;
  this.isOpened = !this.isOpened;
}
}
