import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmailFormatClass } from 'src/app/dao/email-format-class';
import { User } from 'src/app/dao/user';
import { EmailserviceService } from 'src/app/services/emailservices/emailservice.service';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { Salon } from 'src/app/dao/salon';

@Component({
  selector: 'app-forgetpassword-salon',
  templateUrl: './forgetpassword-salon.component.html',
  styleUrls: ['./forgetpassword-salon.component.css']
})
export class ForgetpasswordSalonComponent {
  useremail:string;
  user:User;
  isDisabled:boolean=true;
  isEmailDisabled:boolean=true;
  isAuthorised:boolean=false;
  firstpassword:string;
  secondpassword:string;
  isOptSent: boolean=false;
  isUserPresent:boolean=false;
  otp: number;
  inpOtp: number;

  
 constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private salonService: SalonService,
    private matDialog:MatDialog,
    private emailService: EmailserviceService
  ){}
 validateUser(){
    this.salonService.checkSalonExists(this.useremail).subscribe(
      data=> {this.isUserPresent=data,
        this.enableOtpField()

      },banckenderror=>this.errorHandling(banckenderror)
    )
 }
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==400){
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"Something Went Wrong"
      })
    }
  }

  enableOtpField(){
    
    if(!this.isUserPresent){
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"No user found"
      })
    }
    else{
      this.sendOtp();
      this.isDisabled=!this.isDisabled 
    }
  }

  sendOtp(){
    // email body
  const to=`${this.useremail}`;
  const  subject="Password Reset";
            // gen otp using random number
  this.otp =Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  const  body=`Greetings from ChromaCuts!! \nYour One-Time Password (OTP) is: ${this.otp} to reset password for ChromaCuts account \n DO NOT share it with anyone`;
  const sendOtpUserData: EmailFormatClass = new EmailFormatClass(to, subject, body);
  this.emailService.sendOtp(sendOtpUserData).subscribe();
  this.matDialog.open(InvalidcomponentComponent,{
    width: '250px', 
    data:"OTP Sent successfully"
  })
  }

  checkOtp() {
    
    if(this.otp == this.inpOtp){
      this.isAuthorised = !this.isAuthorised;
    }
    else{
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"Incorrect OTP"
      })
    }
  }

  savePass(salon: Salon){
    salon.salonpassword = this.firstpassword;
    this.salonService.updateSalonById(salon.salonid,salon).subscribe(
      ()=>{
      console.log("password is updated"),
      window.location.reload();
      }),banckenderror=>this.errorHandling(banckenderror)
  }

  updatepass(){
     if(this.firstpassword == this.secondpassword){
      // this.user.userpassword=this.firstpassword;
      console.log(this.useremail)
      this.salonService.getSalonByEmail(this.useremail).subscribe(data=>this.savePass(data));
      console.log(this.user)
      
     }else{
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"password does not match"
      })
     }
  }
}
