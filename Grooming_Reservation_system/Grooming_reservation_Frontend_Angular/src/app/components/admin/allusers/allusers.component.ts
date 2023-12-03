import { Component } from '@angular/core';
import { MatDialog} from  '@angular/material/dialog';
import { EdituserComponent } from '../edituser/edituser.component';
import { User } from 'src/app/dao/user';
import { FormBuilder } from '@angular/forms';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service';

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

  constructor(private userDataService: UserDataService , private matDialog: MatDialog, private fb: FormBuilder){}

  searchForm =this.fb.nonNullable.group({
    searchValue:'',
  })

  ngOnInit():void{
    this.userDataService.getAllUser().subscribe(data =>
      this.users = data);
  }
  deleteUser(userid:number) {
    this.userDataService.deleteUser(userid).subscribe();
    window.location.reload();
  }

  editUser(userid: any) {
    this.matDialog.open(EdituserComponent,{
      width: '700px',
      data:userid
    })
  }

  enableUserById(userid: any) {
    this.userDataService.enableUserById(userid).subscribe();
    window.location.reload();
  }

  searchUserBySearch(searchValue : string){
    this.userDataService.searchUserlike(searchValue).subscribe(data => this.users=data);
  }

  onSearchSubmit() {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    if(this.searchValue == ''){
      this.userDataService.getAllUser().subscribe(data =>
        this.users = data);
    }
    else{
       this.searchUserBySearch(this.searchValue);
      }
  }

  onSalonStatusChange() {
    console.log(this.selectedUserStatus);
    if(this.selectedUserStatus == 'All Users'){
      this.userDataService.getAllUser().subscribe(data =>
        this.users = data);
    }
    else{
      this.userDataService.searchUserByIsDeleted(this.selectedUserStatus).subscribe(data =>
        this.users = data);
    }
  }

}
