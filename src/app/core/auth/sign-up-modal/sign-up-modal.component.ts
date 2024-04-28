import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss'] // Use styleUrls instead of styleUrl
})

export class SignUpModalComponent {

  isSignUp = true;
  addSlideUpClass= false;

  constructor(){

  }

 toggleSlideUpClass() {
    this.addSlideUpClass = !this.addSlideUpClass;
  }

  logIn(){
   
  }

  signUp(){
    
  }

  
}
