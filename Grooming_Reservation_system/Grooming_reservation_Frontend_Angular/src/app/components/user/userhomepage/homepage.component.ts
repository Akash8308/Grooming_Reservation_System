// npm install ngx-bootstrap --save
import { ViewportScroller } from '@angular/common';
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
  recordsPerPage: 8;
  pagenum: any;
  currentIndex: number;
  slides = [
    // { image: '../../assets/barber1.jpg', text: 'Slide 1' },
    { image: 'https://shorturl.at/eCNQ2', text: 'Slide 1' },
    { image: 'https://shorturl.at/nuwyU', text: 'Slide 2' },
    { image: 'https://shorturl.at/gkqzH', text: 'Slide 3' }
  ];

  redirect(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
    }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length);
  }
  
  logout() {
    console.log('loggedout');
    this.userauthentication.logout();
    this.router.navigate(['lpage']);
  }

  ngOnInit(){
    this.username = sessionStorage.getItem("username"); 
    this.useremail=sessionStorage.getItem("usermail");    
    this.salondataservice.getAllSalon().subscribe(data=>this.salons=data);
    // console.log('abcd',this.salondataservice.getAllSalonWithCount());
  }

 

  constructor(private viewportScroller: ViewportScroller,private router:Router, private userauthentication: UserauthenticationService, private salondataservice: SalonService){}
  

  
}
