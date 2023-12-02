import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salon } from 'src/app/dao/salon';
import { DataserviceService } from '../userdataservices/userdataservice.service';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  salon:Salon;
  isUserLoggedIn(){
    let salon= sessionStorage.getItem('salonemailid');
    return !(salon==null);
  }

  logout(){
    sessionStorage.removeItem('salonemailid');
    sessionStorage.removeItem('salonname');
  }
  

  constructor(private http:HttpClient, private dataservice: DataserviceService) { }

  url = this.dataservice.url;

  addsalon(salon: Salon) {
   return this.http.post<Salon>(`${this.url}/saveSalon`,salon);
  }
 
  getSalonByEmailPassword(salonemailid :string,salonpassword:string){
    return this.http.get<Salon>(`${this.url}/getSalonByEmailPassword/${salonemailid}/${salonpassword}`)
  }
  
  getAllSalon(){
    return this.http.get<Salon[]>(`${this.url}/getAllSalon`);
  }

  updateSalonById(salonid: any, salon: Salon){
    return this.http.put<Salon>(`${this.url}/updateSalonById/${salonid}`,salon);
  }
  
  searchSalonlike(value: string) {
    return this.http.get<Salon[]>(`${this.url}/searchSalonlike/${value}`);
  }
  
  searchSalonByStatus(selectedSalonStatus: any) {
    return this.http.get<Salon[]>(`${this.url}/searchSalonByStatus/${selectedSalonStatus}`);
  }
  
}
  
  

