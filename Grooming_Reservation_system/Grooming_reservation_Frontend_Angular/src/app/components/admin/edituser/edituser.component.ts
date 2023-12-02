import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/dao/user';
import { AdmindataserviceService } from 'src/app/services/admindataservices/admindataservice.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  user: User;
  userid: any;  

    constructor(@Inject(MAT_DIALOG_DATA) public data:any, private admindataservice: AdmindataserviceService)
    { 
      this.userid = data;
    }

    ngOnInit(){
      this.admindataservice.getUserById(this.userid).subscribe(data=> this.user = data);
    }

    saveUser() {
      this.admindataservice.updateUserById(this.userid, this.user).subscribe(()=> console.log('user updated'));
      window.location.reload();
    }
}