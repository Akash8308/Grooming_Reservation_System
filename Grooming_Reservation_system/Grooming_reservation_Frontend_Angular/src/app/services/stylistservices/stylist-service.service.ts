import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stylist } from '../../dao/stylist';
import { UserDataService } from '../userservices/userdataservice.service';

@Injectable({
  providedIn: 'root'
})
export class StylistServiceService {

  constructor(private http:HttpClient,private dataservice: UserDataService ) { }
  url = this.dataservice.url;

  getAllStylist(){
    return this.http.get<Stylist[]>(`${this.url}/getAllStylist`);
  }

}
