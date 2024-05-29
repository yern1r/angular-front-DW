import { Injectable } from '@angular/core';

import { grammaticaQuestions, sozdikaQuestions, phrazaQuestions } from '../../app/shared/questions.model';
import { Question } from '../shared/questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getGrammaticaQuestions(): Question[] {
    return grammaticaQuestions;
  }

  getSozdikaQuestions(): Question[] {
    return sozdikaQuestions;
  }

  getPhrazaQuestions(): Question[] {
    return phrazaQuestions;
  }
}
