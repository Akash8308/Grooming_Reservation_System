import { Component } from '@angular/core';
import { Stylist } from 'src/app/dao/stylist';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service';


@Component({
  selector: 'app-viewallstylist',
  templateUrl: './viewallstylist.component.html',
  styleUrls: ['./viewallstylist.component.css']
})
export class ViewallstylistComponent {

  stylist: Stylist[]=[];
  recordsPerPage: number;
  pagenum: number;

  constructor(private stylistService: StylistServiceService){}
  ngOnInit(){
    this.stylistService.getAllStylist().subscribe(data => this.stylist=data);
  }

}
