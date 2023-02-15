import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from './../../services/userservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formerror:string="";
constructor(private router:Router , private userservices:UserservicesService){}
get getemail (){
 return this.loginform.controls['email']
}

get getpassword(){
  return this.loginform.controls["password"]
}
 loginform =new FormGroup({
 email:new FormControl("",[Validators.required, Validators.email]),
 password: new FormControl("",[Validators.required,Validators.minLength(4)])
});


login(){
  if(this.loginform.status=="VALID"){
    this.userservices.postData(this.loginform.value).subscribe((Response)=>{
    //  console.log(Response)
    if(Response=="correct"){
      this.router.navigate(['/dashboard']);
    }else{
      console.log(Response)
      this.formerror="Email or Password are not correct";
    }
    

    });
   
}
}}

