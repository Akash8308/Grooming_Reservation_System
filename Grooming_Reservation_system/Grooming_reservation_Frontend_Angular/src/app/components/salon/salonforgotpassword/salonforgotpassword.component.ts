import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';

@Component({
  selector: 'app-salonforgotpassword',
  templateUrl: './salonforgotpassword.component.html',
  styleUrls: ['./salonforgotpassword.component.css']
})
export class SalonforgotpasswordComponent {
  salonemail:string;
  salon:Salon;
  isDisabled:boolean=true;
  firstpassword:string;
  secondpassword:string;
 constructor(@Inject(MAT_DIALOG_DATA) public data:any,private salonservice:SalonService,private matDialog:MatDialog){}
 continue(){
    this.salonservice.getSalonByEmail(this.salonemail).subscribe(
      data=> {this.salon=data,
        this.isDisabled=!this.isDisabled
        
      },banckenderror=>this.errorHandling(banckenderror)
    )
 }
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==400){
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"Salon email does not exist"
      })
    }
  }

  updatepass(){
     if(this.firstpassword == this.secondpassword){
      this.salon.salonpassword=this.firstpassword;
      this.salonservice.updateSalonById(this.salon.salonid,this.salon).subscribe(
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
