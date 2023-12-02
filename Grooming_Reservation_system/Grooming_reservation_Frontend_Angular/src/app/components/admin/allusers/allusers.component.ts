import { Component } from '@angular/core';
import { AdmindataserviceService } from 'src/app/services/admindataservices/admindataservice.service';
import { MatDialog} from  '@angular/material/dialog';
import { EdituserComponent } from '../edituser/edituser.component';
import { User } from 'src/app/dao/user';
//PipeTransform for search

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {



  users: any[]=[];
  recordsPerPage: 10;
  pagenum: number=1;
  ButtonDiv: boolean;

  constructor(private admindataservice: AdmindataserviceService, private matDialog: MatDialog){}

  ngOnInit():void{
    this.admindataservice.getAllUser().subscribe(data =>
      this.users = data);
  }
  deleteUser(userid:number) {
    this.admindataservice.deleteUser(userid).subscribe();
    window.location.reload();
  }

  editUser(userid: any) {
    this.matDialog.open(EdituserComponent,{
      width: '700px',
      data:userid
    })
  }

  enableUserById(userid: any) {
    this.admindataservice.enableUserById(userid).subscribe();
    window.location.reload();
    }

}
