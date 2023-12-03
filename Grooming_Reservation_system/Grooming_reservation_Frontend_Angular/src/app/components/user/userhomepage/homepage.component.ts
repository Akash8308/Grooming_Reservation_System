import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { UserauthenticationService } from 'src/app/services/userservices/userauthentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  username: string;
  useremail:string;
  salons: Salon[]=[];


  ngOnInit(){
    this.username = sessionStorage.getItem("username"); 
   this.useremail=sessionStorage.getItem("usermail");    

  }

logout() {
  this.userauthentication.logout();
  this.router.navigate(['login']);
}
  constructor(private router:Router, private userauthentication: UserauthenticationService, private salondataservice: SalonService){}
  loginBtn():void{
    console.log("login button clicked")
    this.router.navigate(['login']);
  }
}
