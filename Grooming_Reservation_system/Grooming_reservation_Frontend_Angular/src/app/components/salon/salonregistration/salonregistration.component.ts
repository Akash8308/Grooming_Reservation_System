import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { RecordexistcomponentComponent } from '../../popups/recordexistcomponent/recordexistcomponent.component';


@Component({
  selector: 'app-salonregistration',
  templateUrl: './salonregistration.component.html',
  styleUrls: ['./salonregistration.component.css']
})
export class SalonregistrationComponent {
  selectedSalonopeninghours:string;
  openinghours:string[]=[
    'mon-fri 9:00-5:00',
    'mon-fri 9:00-12:00',
    'mon-fri 12:00-5:00',
    'mon-sun 9:00-5:00',
    'mon-sun 9:00-12:00',
    'mon-sun 12:00-5:00',
  ];
  onselectedSalonOpeningHours(selectedSalonopeninghours:string){
    this.salonopeninghours = selectedSalonopeninghours;
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
  saloncategory='Hair';
  salonpicurl='';

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
    this.salonstatus,
    this.saloncategory,
    this.salonpicurl
    );

  constructor(private salonservice: SalonService , private router: Router, private matDialog:MatDialog){}

  loginBtn(){
    this.router.navigate(['salonlogin']);
  }
  
  salonregister(){
    console.log(this.salon);
    this.salonservice.addsalon(this.salon).subscribe( () => this.router.navigate(['salonlogin']),banckenderror=>this.errorHandling(banckenderror));

  }
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==409){
          this.matDialog.open(RecordexistcomponentComponent,{
            width:'250px',
            data:this.salon.salonname
          });
  }
}

}
