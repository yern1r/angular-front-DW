import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../../../../../shared/questions.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  @Input() question!: Question;
  @Output() answerSelected = new EventEmitter<string>();
  constructor() {}

  onSelectionChange(event: any) {
    this.answerSelected.emit(event.target.value);
  }

  onAnswerChange(selectedOption: string) {
    this.answerSelected.emit(selectedOption);
  }
}
