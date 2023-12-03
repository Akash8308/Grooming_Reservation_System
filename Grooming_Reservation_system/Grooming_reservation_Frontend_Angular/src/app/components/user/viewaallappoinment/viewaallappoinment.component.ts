import { Component } from '@angular/core';
// import { AppoinmentService } from 'src/app/services/appoinmentservices/appoinment.service';

@Component({
  selector: 'app-viewaallappoinment',
  templateUrl: './viewaallappoinment.component.html',
  styleUrls: ['./viewaallappoinment.component.css']
})
export class ViewaallappoinmentComponent {
  recordsPerPage: number;
  pagenum: number;
  Appointment:any;
// Appointment: ;

// constructor(private appoinmentService: AppoinmentService ) { }
// ngOnInit(){
//   this.appoinmentService.getAllStylist().subscribe(data => this.stylist=data);
// }
}
