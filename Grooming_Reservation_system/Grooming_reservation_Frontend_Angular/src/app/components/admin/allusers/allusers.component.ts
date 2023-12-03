import { Component } from '@angular/core';
import { AdmindataserviceService } from 'src/app/services/admindataservices/admindataservice.service';
import { MatDialog} from  '@angular/material/dialog';
import { EdituserComponent } from '../edituser/edituser.component';
import { User } from 'src/app/dao/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {

  users: any[]=[];
  searchValue='';
  recordsPerPage: 10;
  pagenum: number=1;
  ButtonDiv: boolean;
  selectedUserStatus: any;
  userStatus= [
    'All Users',
    'Enabled',
    'Disabled'
  ];

  constructor(private admindataservice: AdmindataserviceService, private matDialog: MatDialog, private fb: FormBuilder){}

  searchForm =this.fb.nonNullable.group({
    searchValue:'',
  })

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

  searchUserBySearch(searchValue : string){
    this.admindataservice.searchUserlike(searchValue).subscribe(data => this.users=data);
  }

  onSearchSubmit() {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    if(this.searchValue == ''){
      this.admindataservice.getAllUser().subscribe(data =>
        this.users = data);
    }
    else{
       this.searchUserBySearch(this.searchValue);
      }
    }

  onSalonStatusChange() {
    console.log(this.selectedUserStatus);
    if(this.selectedUserStatus == 'All Users'){
      this.admindataservice.getAllUser().subscribe(data =>
        this.users = data);
    }
    else{
      this.admindataservice.searchUserByIsDeleted(this.selectedUserStatus).subscribe(data =>
        this.users = data);
    }
  }

}
