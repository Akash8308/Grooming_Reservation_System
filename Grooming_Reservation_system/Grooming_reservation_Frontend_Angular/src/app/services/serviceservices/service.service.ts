import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../../dao/service';
import { UserDataService } from '../userservices/userdataservice.service'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = this.userDataService.url;
  
  constructor(private http:HttpClient,private userDataService: UserDataService ) { }
  
  getAllServices(){
    return this.http.get<[Service]>(`${this.url}/getAllServices`);
  }
}
