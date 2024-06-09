import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { LangService } from './services/qazaq-til.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qazaq-til-page',
  templateUrl: './qazaq-til-page.component.html',
  styleUrls: ['./qazaq-til-page.component.scss']
})
export class QazaqTilPageComponent {


  constructor(private dialog: MatDialog, private langService: LangService, private router: Router) {

  }
  languageData: { id: number; title: string; content: string; type: string }[] = [];

  
  isGrammatica = false;
  isSozdik = false;
  isPhraza = false;
  isOpened = true;
  isHarmonyLaw = false;

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
    this.isHarmonyLaw = false;
  }

  showPhrazakMaterial() {
    if (!this.isPhraza) { // Only reset if the current state is not active
      this.resetAllMaterials();
    }
    this.isPhraza = !this.isPhraza;
    // this.isOpened = !this.isOpened;
  }

  showSozdikMaterial() {
    if (!this.isSozdik) { // Only reset if the current state is not active
      this.resetAllMaterials();
    }
    this.isSozdik = !this.isSozdik;
    // this.isOpened = !this.isOpened;
  }

  showGrammaticaMaterial() {
    if (!this.isGrammatica) { // Only reset if the current state is not active
      this.resetAllMaterials();
    }
    this.isGrammatica = !this.isGrammatica;
    this.isHarmonyLaw = !this.isHarmonyLaw;
    // this.isOpened = !this.isOpened;
  }
  ngOnInit(): void {
    this.langService.languageInfo()
      .subscribe((response: any) => {
        if(response.code === 0 && response.message === 'success')
        this.languageData = response.data
        console.log("Language data: " + this.languageData);
      })
  }
}

