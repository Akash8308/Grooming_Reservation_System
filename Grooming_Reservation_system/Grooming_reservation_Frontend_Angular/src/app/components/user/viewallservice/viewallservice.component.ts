import { Component } from '@angular/core';
import { Service } from 'src/app/dao/service';
import { ServiceService } from 'src/app/services/serviceservices/service.service';


@Component({
  selector: 'app-viewallservice',
  templateUrl: './viewallservice.component.html',
  styleUrls: ['./viewallservice.component.css']
})
export class ViewallserviceComponent {

  service: Service[]=[];
recordsPerPage: string|number;
pagenum: string|number;

constructor(private serviceService: ServiceService){}
ngOnInit(){
  this.serviceService.getAllServices().subscribe(data => this.service=data);
}
}
