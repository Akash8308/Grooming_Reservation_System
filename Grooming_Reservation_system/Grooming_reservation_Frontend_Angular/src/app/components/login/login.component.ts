import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from 'src/app/services/userservices/userauthentication.service';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service'; 
import { MatDialog} from  '@angular/material/dialog';
import { InvalidcomponentComponent } from '../popups/invalidcomponent/invalidcomponent.component';
import { ForgotpassswordComponent } from '../user/forgotpasssword/forgotpasssword.component';

// import {DialogBodyComponent} from 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inpusermail= "";
  inpuserpass= "";
  loginuser:boolean= false ;

  

  constructor(private userauthentication: UserauthenticationService, private router: Router, private userDataService: UserDataService, private matDialog: MatDialog){}

  registerBtn(){
    this.router.navigate(['userregistration']);
  }
  
  handlelogin() {
      this.userauthentication.validateUser(this.inpusermail,this.inpuserpass).subscribe(
        data=>{
              sessionStorage.setItem("usermail",data.useremail),
              sessionStorage.setItem("username",data.userfirstname),
              sessionStorage.setItem("userid",data.userid.toString()),
              this.loginuser = true,
              this.redirect();
              },banckenderror=>this.errorHandling(banckenderror)
              );
  }
  
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==400){
        this.matDialog.open(InvalidcomponentComponent,{
          width: '250px', 
          data:"Invalid Credentials"
        })
    }
    else if(banckenderror.status==404){
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px',
        data:"Cannot connect to the server 😐"
        // data:banckenderror
    })}
    else{
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px',
        data:"Something Went Wrong 😐"
        // data:banckenderror
    })
    }
  }
  
  redirect(){
    if(sessionStorage.getItem("usermail") == "Admin@gmail.com"){
      this.router.navigate(['adminhomepage']);
    }
    else{
      sessionStorage.setItem("navReloadFlag", '0');
      this.router.navigate(['homepage']);
    }
  }
  forgotPass(){
      this.matDialog.open(ForgotpassswordComponent,{
        width: '700px'
      })
  }

}
