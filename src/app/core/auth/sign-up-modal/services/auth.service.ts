import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  isUserLoggedIn: boolean = false;

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
          this.isUserLoggedIn = true;
          localStorage.setItem('isUserLoggedIn', 'true');
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
          this.isUserLoggedIn = true;
          localStorage.setItem('isUserLoggedIn', 'true');
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
        if (response.message === 'success') {
          this.isUserLoggedIn = true;
        } else {
          this.isUserLoggedIn = false;
        }
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('authToken');
  }
}
