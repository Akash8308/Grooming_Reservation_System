import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/dao/user';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';

@Component({
  selector: 'app-forgotpasssword',
  templateUrl: './forgotpasssword.component.html',
  styleUrls: ['./forgotpasssword.component.css']
})
export class ForgotpassswordComponent {
  useremail:string;
  user:User;
  isDisabled:boolean=true;
  firstpassword:string;
  secondpassword:string;
 constructor(@Inject(MAT_DIALOG_DATA) public data:any,private userservice:UserDataService,private matDialog:MatDialog){}
 continue(){
    this.userservice.getUserByEmail(this.useremail).subscribe(
      data=> {this.user=data,
        this.isDisabled=!this.isDisabled
        
      },banckenderror=>this.errorHandling(banckenderror)
    )
 }
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==400){
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"User email does not exist"
      })
    }
  }

  updatepass(){
     if(this.firstpassword == this.secondpassword){
      this.user.userpassword=this.firstpassword;
      this.userservice.updateUserById(this.user.userid,this.user).subscribe(
        data=>{
        (console.log("password is updated")),
        window.location.reload();
        })
     }else{
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"password does not match"
      })
     }
  }
}
