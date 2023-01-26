import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  logimg = 'assets/housekeeper.jpg';

  constructor(
    private backend:BackendService
    ) {}
    public form={
      email:null,
      password:null
    }
  public error = null;
  submitLogin(){
    console.log(this.form)
    return this.backend.login(this.form).subscribe(
    data=>console.log(data),
    error=>this.handleError(error)
    );
  }
  handleError(error:any){
    this.error= error.error.error;
  }
}

