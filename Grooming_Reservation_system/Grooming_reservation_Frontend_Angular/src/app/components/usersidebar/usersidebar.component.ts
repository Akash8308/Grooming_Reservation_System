import { Component } from '@angular/core';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css'],
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
})
export class UsersidebarComponent {
categories: any;

  constructor(private salondataservice: SalonService){}

  ngOnInit(){
    this.salondataservice.getAllSalonCategories().subscribe(data => this.categories=data);
  }

}
