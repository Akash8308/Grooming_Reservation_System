import { Component } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { MatDialog } from '@angular/material/dialog';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  appointments: any[]=[];

  constructor(private appointmentService: AppointmentService,private matDialog: MatDialog){}

  ngOnInit(){
    this.appointmentService.getAllAppointments().subscribe(data =>this.saveAppointments(data)),banckenderror=>this.errorHandling(banckenderror)
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
