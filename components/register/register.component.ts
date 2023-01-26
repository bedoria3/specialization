import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
housekeep = 'assets/housekeeper.jpg';
constructor(private backend:BackendService) {}
  public form={
    name:null,
    address:null,
    hrnumber:null,
    cnumber:null,
    email:null,
    password:null,
    cpassword:null,
  }

  public error:any = [];

  submitRegister(){
    //console.log(this.form)
    return this.backend.register(this.form).subscribe(
    data=>console.log(data),
    error=>this.handleError(error)
    );
  }
  handleError(error:any){
    this.error= error.error.errors;
  }
}
