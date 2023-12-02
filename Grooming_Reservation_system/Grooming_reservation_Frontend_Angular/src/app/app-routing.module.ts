import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/user/userhomepage/homepage.component';
import { RouteguardService } from './services/routeguard.service';
import { UserregistrationComponent } from './components/user/userregistration/userregistration.component';
import { SalonregistrationComponent } from './components/salon/salonregistration/salonregistration.component';
import { LpageComponent } from './components/lpage/lpage.component';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';
import { AllusersComponent } from './components/admin/allusers/allusers.component';
import { AllsalonsComponent } from './components/admin/allsalons/allsalons.component';
import { AppointmentsComponent } from './components/admin/appointments/appointments.component';
import { SalonLoginComponent } from './components/salon/salonlogin/salonlogin.component';
import { SalonhomepageComponent } from './components/salon/salonhomepage/salonhomepage.component';
import { SalonrequestsComponent } from './components/admin/salonrequests/salonrequests.component';
// import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
// import { UseraddressComponent } from './components/user/useraddressregister/useraddress.component';
// import { ViewaallappoinmentComponent } from './components/user/viewaallappoinment/viewaallappoinment.component';
// import {userhomepage} from  './components/user/viewaallappoinment/userhomepage.component';


const routes: Routes = [
  { path: '', redirectTo: "lpage", pathMatch: 'full' },
  { path: "lpage", component: LpageComponent},
  { path: "login", component: LoginComponent },
  { path: "homepage", component: HomepageComponent, canActivate:[RouteguardService] },
  { path: "userregistration", component: UserregistrationComponent },
  { path: "salonregistration", component: SalonregistrationComponent },
  { path: "adminhomepage", component: AdminhomepageComponent, canActivate:[RouteguardService] },
  { path: "allusers", component: AllusersComponent, canActivate:[RouteguardService] },
  { path: "allsalons", component: AllsalonsComponent, canActivate:[RouteguardService] },
  { path: "appointments", component: AppointmentsComponent, canActivate:[RouteguardService] },
  { path: "salonregistration", component: SalonregistrationComponent },
  { path: "salonhomepage", component: SalonhomepageComponent },
  { path: "salonlogin", component: SalonLoginComponent },
  { path: "salonrequests", component: SalonrequestsComponent },
  // { path: "updateuser", component: UpdateuserComponent },
  // { path: "useraddress", component: UseraddressComponent },
  // { path: "userhomepage", component:  userhomepage},
  // { path: "viewaallappointment", component: ViewaallappoinmentComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
