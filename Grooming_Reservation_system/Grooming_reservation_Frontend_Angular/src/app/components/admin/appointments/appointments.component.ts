import { Component } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { AdmindataserviceService } from 'src/app/services/admindataservices/admindataservice.service';
import { MatDialog } from '@angular/material/dialog';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  appointments: any[]=[];

  constructor(private admindataservice: AdmindataserviceService,private matDialog: MatDialog){}

  ngOnInit(){
    this.admindataservice.getAllAppointments().subscribe(data =>this.saveAppointments(data)),banckenderror=>this.errorHandling(banckenderror)
  }

  errorHandling(banckenderror: any): void {
    this.matDialog.open(InvalidcomponentComponent,{
    width: '250px'}
    );
  }

  
  saveAppointments(data:any){
    this.appointments =data
  }

}
