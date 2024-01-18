import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder, private authService:AuthService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.maxLength(50)]],
      motDePasse: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
    })
  }

  onSubmit(){
    this.authService.login(this.loginForm.value)
  }

}
