import { Component } from '@angular/core';
import { FormControl , FormGroup , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  
navigate: any;


  constructor(private router: Router){
    this.loginForm.valueChanges.subscribe((value)=> {
      console.log(value);

      
    });
  }

login(){
  //call api with username and password
   if (this.loginForm.valid) 
  {  this.router.navigate(['/admin-homepage']); }
}
}
