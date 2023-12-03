import { Component } from '@angular/core';
import { Salon } from 'src/app/dao/salon';
import { EditsalonComponent } from '../editsalon/editsalon.component';
import { MatDialog } from '@angular/material/dialog';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { SalonapprovepopupComponent } from '../../popups/salonapprovepopup/salonapprovepopup.component';

@Component({
  selector: 'app-salonrequests',
  templateUrl: './salonrequests.component.html',
  styleUrls: ['./salonrequests.component.css']
})
export class SalonrequestsComponent {
  salons: Salon[]=[];
  recordsPerPage: string|number;
  pagenum: string|number;
  msg:string;
  
    ngOnInit(){
      this.salondataservice.getAllSalon().subscribe(data => this.salons=data);
    }
  
    deleteSalon(salonid: any, salon: Salon) {
      this.msg='Rejected';
      this.salondataservice.rejectSalonById(salonid,salon).subscribe(()=>this.showPopup());
    }
  
    approveSalon(salonId: any, salon: Salon){
      this.msg='Approved';
      this.salondataservice.enableSalonById(salonId,salon).subscribe(()=>this.showPopup());
    }

    showPopup(){
      this.matDialog.open(SalonapprovepopupComponent,{width: '250px',data:this.msg});
    }

    constructor(private salondataservice: SalonService, private matDialog: MatDialog){}
}
