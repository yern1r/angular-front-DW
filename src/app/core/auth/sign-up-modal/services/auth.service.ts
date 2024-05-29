import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false

  login(username: string, password: string){
    return this.http.post(
      'http://localhost:8080/api/v1/user/login',
      {
        Username: username,
        Password: password,
      },
      { responseType: 'text' }
    );
    
    // this.isUserLoggedIn = true;
    // localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false")
  }

  public register(
    username: string,
    email: string,
    password: string
  ){
    return this.http.post(
      'http://localhost:8080/api/v1/user/register',
      {
        Username: username,
        Email: email,
        Password: password,
      },
      { responseType: 'text' }
    );
  }

  // logout(){
  //   this.isUserLoggedIn = false;
  //   localStorage.removeItem('isUserLoggedIn'); 
  // }

  constructor(private http: HttpClient) { }
}
