
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { tap } from 'rxjs/operators';

interface AuthResponse {
  code: number;
  message: string;
  data: string; // JWT token
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1/user';

  private loggedInSubject = new BehaviorSubject<boolean>(this.isUserAuthorized());
  loggedIn$ = this.loggedInSubject.asObservable();


  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthResponse>(
      `${this.baseUrl}/login`,
      { Username: email, Password: password },
      { headers }
    ).pipe(
      tap(response => {
        if (response.message === 'success') {
          localStorage.setItem('authToken', response.data);

          this.loggedInSubject.next(true);

        }
      })
    );
  }

  register(name: string, email: string, password: string): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthResponse>(
      `${this.baseUrl}/register`,
      { Username: name, Email: email, Password: password },
      { headers }
    ).pipe(
      tap(response => {
        if (response.message === 'success') {
          localStorage.setItem('authToken', response.data);

          this.loggedInSubject.next(true);

        }
      })
    );
  }

  isUserAuthorized(): boolean {
    return !!localStorage.getItem('authToken');
  }

  attemptLogin(): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<AuthResponse>(
      `${this.baseUrl}/login`,
      { headers }
    ).pipe(
      tap(response => {

        this.loggedInSubject.next(response.message === 'success');

      })
    );
  }

  logout(): void {

    localStorage.removeItem('authToken');
    this.loggedInSubject.next(false);

  }
}
