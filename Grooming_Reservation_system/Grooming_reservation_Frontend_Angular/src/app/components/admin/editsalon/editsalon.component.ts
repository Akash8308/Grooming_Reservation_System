import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdmindataserviceService } from 'src/app/services/admindataservices/admindataservice.service';


@Component({
  selector: 'app-editsalon',
  templateUrl: './editsalon.component.html',
  styleUrls: ['./editsalon.component.css']
})
export class EditsalonComponent {

salon: any;
salonid: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data:any, private admindataservice: AdmindataserviceService)
    { 
      this.salonid = data;
    }

    ngOnInit(){
      this.admindataservice.getSalonById(this.salonid).subscribe(data=> this.salon=data);
    }

    saveSalon() {
      this.admindataservice.updateSalonById(this.salonid, this.salon).subscribe();
      window.location.reload();
    }
 
}
