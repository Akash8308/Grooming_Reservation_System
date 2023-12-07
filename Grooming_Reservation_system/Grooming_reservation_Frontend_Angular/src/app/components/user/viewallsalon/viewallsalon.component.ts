import { Component } from '@angular/core';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';

@Component({
  selector: 'app-viewallsalon',
  templateUrl: './viewallsalon.component.html',
  styleUrls: ['./viewallsalon.component.css']
})
export class ViewallsalonComponent {

  salons: Salon[]=[];
  p : number =1;
  count : number =8;

  constructor(private salondataservice: SalonService){}

    ngOnInit(){
      this.salondataservice.getAllSalon().subscribe(data => this.salons=data);
    }

    

}
  


