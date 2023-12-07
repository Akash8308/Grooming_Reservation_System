import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { UserDataService } from '../userservices/userdataservice.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  url = this.userDataService.url;

  constructor(private http: HttpClient, private userDataService: UserDataService) { }

  getAllAppointments(){
    return this.http.get<Appointment[]>(`${this.url}/getAllAppointments`);
  }
  getAllAppointmentsBySalonId(salonid: any){
    return this.http.get<Appointment[]>(`${this.url}/getAllAppointmentsBySalonId/${salonid}`);
  }

  getAppointmentsByUserId(userid: any) {
    return this.http.get<Appointment[]>(`${this.url}/getAppointmentsByUserId/${userid}`);
  }
}
