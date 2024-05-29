import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-qazaq-til-page',
  templateUrl: './qazaq-til-page.component.html',
  styleUrls: ['./qazaq-til-page.component.scss']
})
export class QazaqTilPageComponent {


  constructor(private dialog: MatDialog){
  
  }



    isGrammatica = false;
    isSozdik = false;
    isPhraza = false;
    isNotClicked = true;

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
    this.isNotClicked = false;
  }

  showSozdikMaterial() {
    if (!this.isSozdik) { // Only reset if the current state is not active
      this.resetAllMaterials();
    }
    this.isSozdik = !this.isSozdik;
    this.isNotClicked = false;
  }

  showGrammaticaMaterial() {
    if (!this.isGrammatica) { // Only reset if the current state is not active
      this.resetAllMaterials();
    }
    this.isGrammatica = !this.isGrammatica;
    this.isNotClicked = false;
  }
}

