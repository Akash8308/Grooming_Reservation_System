import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';


@Component({
  selector: 'app-salonregistration',
  templateUrl: './salonregistration.component.html',
  styleUrls: ['./salonregistration.component.css']
})
export class SalonregistrationComponent {

	onSelected(value:string): void {
		this.salonopeninghours = value;
	}
  salonid="";
  salonname ="";
  salonaddress="";
  saloncity=""; 
  salonpincode="";
  salonstate="";
  salonphone="";
  salonemailid="";
  salonopeninghours="";
  salondescription="";
  salonrating="1";
  salonpassword="";
  salonstatus="Applied";

  salon :Salon = new Salon(
    this.salonid,
    this.salonname,
    this.salonaddress,
    this.saloncity, 
    this.salonpincode,
    this.salonstate,
    this.salonphone,
    this.salonemailid,
    this.salonopeninghours,
    this.salondescription,
    this.salonrating,
    this.salonpassword,
    this.salonstatus
    );

  constructor(private salonservice: SalonService , private router: Router, private snackbar: MatSnackBar){}

  loginBtn(){
    this.router.navigate(['salonlogin']);
  }
  salonregister(){
    console.log(this.salon);
    this.salonservice.addsalon(this.salon).subscribe( () => this.router.navigate(['salonlogin']),banckenderror=>this.errorHandling(banckenderror));

  }
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==409){
          this.snackbar.open("salon already exists", 'close', {
            duration:3000,
            verticalPosition:'top',  
    });
  }
}

}
