import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';


@Component({
  selector: 'app-salonlogin',
  templateUrl: './salonlogin.component.html',
  styleUrls: ['./salonlogin.component.css']
})

export class SalonLoginComponent {

  inpusermail= "";
  inpuserpass= "";
  loginuser:boolean= false ;
  

  constructor(private salonservice:SalonService, private router: Router,private snackbar:MatSnackBar){}

  registerbtn(){
    this.router.navigate(['salonregistration']);
  }
  handlelogin() {
      console.log("In handle login")
      this.salonservice.getSalonByEmailPassword(this.inpusermail,this.inpuserpass).subscribe(
        data=>{
              sessionStorage.setItem("salonemailid",data.salonemailid),
              sessionStorage.setItem("salonname",data.salonname),
              this.router.navigate(['salonhomepage']),
              this.loginuser = true
              },banckenderror=>this.errorHandling(banckenderror)
        
              );
            
          
          }
          
          errorHandling(banckenderror: any): void {
            if(banckenderror.status==409){
                  this.snackbar.open("Invalid credentials", 'close', {
                    duration:3000,
                    verticalPosition:'top',
                    
            });

          }
        }
        
    
}


