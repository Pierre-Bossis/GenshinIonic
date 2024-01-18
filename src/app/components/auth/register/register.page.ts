import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
registerForm!:FormGroup
  constructor(private formBuilder:FormBuilder, private authService:AuthService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(2)]],
      email: ['', [Validators.required,Validators.maxLength(50)]],
      motDePasse: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      confirmMdp : [null, [Validators.required,Validators.minLength(4),Validators.maxLength(20)]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('motDePasse')?.value;
    const confirmPassword = formGroup.get('confirmMdp')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmMdp')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmMdp')?.setErrors(null);
    }
  }

  onSubmit(){
    this.authService.register(this.registerForm.value)
  }
}
