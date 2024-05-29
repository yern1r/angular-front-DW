import { Component } from '@angular/core';
import { QuizService } from '../../../../../services/questions.service';
import { Question } from '../../../../../shared/questions.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'] // Use styleUrls instead of styleUrl
})
export class QuizComponent {
  questions: Question[] = [];
  score: number = 0;
  showResult: boolean = false;

  constructor(
    private quizService: QuizService,
    public dialogRef: MatDialogRef<QuizComponent>
  ) {}

  ngOnInit() {
    this.questions = [
      ...this.quizService.getGrammaticaQuestions(),
      ...this.quizService.getSozdikaQuestions(),
      ...this.quizService.getPhrazaQuestions()
    ];
  }

  onAnswerSelected(answer: string, questionIndex: number) {
    const correctAnswer = this.questions[questionIndex].correctAnswer;
    if (answer === correctAnswer) {
      this.score++;
    }
  }

  closeDialog() {
    this.dialogRef.close(this.score);
  }
}
