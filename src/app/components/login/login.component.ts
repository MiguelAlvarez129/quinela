import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  loginForm!: FormGroup;
  loading: boolean = false;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo:['',[Validators.required,Validators.email]],
      contrasena:['',[Validators.required]]
    })
  }

  onSubmit(value : any){
    this.loading = true;
    console.log(value)
  }
}
