import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Appointment } from 'src/app/dao/appointment';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentdisplayComponent } from '../appointmentdisplay/appointmentdisplay.component';




@Component({
  selector: 'app-appointmentdetails',
  templateUrl: './appointmentdetails.component.html',
  styleUrls: ['./appointmentdetails.component.css'],
  
  
})
export class AppointmentdetailsComponent {

 
  constructor(private activeRoute:ActivatedRoute,private appointmentService:AppointmentService,private matDialog :MatDialog,private router:Router){}
  ngOnInit(){
    this.salonid=this.activeRoute.snapshot.params['salonid'];
    this.servicesid=this.activeRoute.snapshot.params['servicesid'];
    this.stylistid= this.activeRoute.snapshot.params['stylistid'];
  }
  appointmentId:number=0;
  appointmentDatestr:any="";
  appointmentTime="";
  appointmentStatus="Pending";
  appointmentType="";
  bookedid:number;
  salonid:number;
  servicesid:number;
  stylistid:number;
  selectedAppointmentTime: any;
  appointmenttime= [
    '10:00',
    '11:00',
    '12:00'
  ];
  selectedAppointmentType:any;
  appointmenttype=[
    'Parlourservice',
    'Homeservice',
    'Onsiteservice'
  ];
 // appointmentDate=new Date(this.appointmentDatestr);
 appointmentDate=this.appointmentDatestr.toString();
  appointment: Appointment=new Appointment(this.appointmentId,this.appointmentDate,
    this.appointmentTime,this.appointmentStatus,this.appointmentType);
 
  onAppointmentTimeChange(){
    console.log(this.selectedAppointmentTime);
    this.appointment.appointmentTime = this.selectedAppointmentTime;
  }
  onAppointmentTypeChange(){
    console.log(this.selectedAppointmentType);
    this.appointment.appointmentType = this.selectedAppointmentType;
  }
  useridstr=sessionStorage.getItem("userid");
  
  userid=parseInt(this.useridstr);
  bookAppointment(){
    console.log("in book appointment");
    
    this.appointmentService.saveAppointment(this.appointment,this.userid,this.salonid,this.servicesid,this.stylistid).subscribe(data=>{
      console.log("appointment booked"),
      this.bookedid=data.appointmentId
      this.router.navigate(['appointmentdisplay',this.salonid,this.servicesid,this.stylistid,this.bookedid]);
      
    });
    
  }
  
}