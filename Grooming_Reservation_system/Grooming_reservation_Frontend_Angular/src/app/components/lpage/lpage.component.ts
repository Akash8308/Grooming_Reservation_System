import { Component } from '@angular/core';

@Component({
  selector: 'app-lpage',
  templateUrl: './lpage.component.html',
  styleUrls: ['./lpage.component.css']
})
export class LpageComponent {

  ngOnInit(){
    if(sessionStorage.getItem("navReloadFlag") == '1'){
      window.location.reload();
      sessionStorage.setItem("navReloadFlag", '0');
    }
    else{
      sessionStorage.setItem("navReloadFlag", '0');
    }
  }
}
