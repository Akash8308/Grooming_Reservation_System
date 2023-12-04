import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';

@Component({
  selector: 'app-updatesalonprofile',
  templateUrl: './updatesalonprofile.component.html',
  styleUrls: ['./updatesalonprofile.component.css']
})
export class UpdatesalonprofileComponent {
 salon:Salon;
 salonid:any;  
 saloncategory='hair salon';


    constructor(@Inject(MAT_DIALOG_DATA) public data:any, private salonservice:SalonService)
    { 
      this.salonid = data;
    }

    ngOnInit(){
      this.salonservice.getSalonById(this.salonid).subscribe(data=> this.salon = data);
    }

    saveSalon() {
      this.salon.saloncategory = 'haicut';
      this.salonservice.updateSalonById(this.salonid,this.salon).subscribe(()=> console.log('user updated'));
      window.location.reload();
    }


}
