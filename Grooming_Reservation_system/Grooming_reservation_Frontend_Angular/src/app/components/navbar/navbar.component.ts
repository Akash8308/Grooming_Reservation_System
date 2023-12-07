import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserauthenticationService } from 'src/app/services/userservices/userauthentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username: any;
  ngOnInit() {
    // Subscribe to route fragment changes
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Scroll to the element with the specified fragment ID
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }


  constructor(private router: Router, private userauthentication: UserauthenticationService, private route: ActivatedRoute){
    this.username = sessionStorage.getItem("username");
  }

  logout() {
    console.log('loggedout');
    this.userauthentication.logout();
    this.router.navigate(['lpage']);
  }

  redirect(arg0: string) {
    this.router.navigate(['homepage']);
  }

  redirectTo(page: string) {
    this.router.navigate(['homepage']);
    }
}
