import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { grammaticaQuestions, sozdikaQuestions, phrazaQuestions } from '../../app/shared/questions.model';
import { Question } from '../shared/questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  questions: Question[] = [];

  getGrammaticaQuestions(): Question[] {

    this.http.post(
      'http://localhost:8081/api/v1/quiz/all',
      {
        Type: 'grammar',
      }
    ).subscribe((response: any) => {
      this.questions = response
    });
    return this.questions
  }

  getSozdikaQuestions(): Question[] {
    this.http.post(
      'http://localhost:8081/api/v1/quiz/all',
      {
        Type: 'sozdik',
      }
    ).subscribe((response: any) => {
      this.questions = response
    });
    return this.questions
  }

  getPhrazaQuestions(): Question[] {
    this.http.post(
      'http://localhost:8081/api/v1/quiz/all',
      {
        Type: 'phraza',
      }
    ).subscribe((response: any) => {
      this.questions = response
    });
    return this.questions
  }
}
