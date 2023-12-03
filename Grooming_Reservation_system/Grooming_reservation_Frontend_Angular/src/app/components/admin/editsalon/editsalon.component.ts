import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';


@Component({
  selector: 'app-editsalon',
  templateUrl: './editsalon.component.html',
  styleUrls: ['./editsalon.component.css']
})
export class EditsalonComponent {

salon: any;
salonid: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data:any, private salondataservice: SalonService)
    { 
      this.salonid = data;
    }

    ngOnInit(){
      this.salondataservice.getSalonById(this.salonid).subscribe(data=> this.salon=data);
    }

    saveSalon() {
      this.salondataservice.updateSalonById(this.salonid, this.salon).subscribe();
      window.location.reload();
    }
 
}
