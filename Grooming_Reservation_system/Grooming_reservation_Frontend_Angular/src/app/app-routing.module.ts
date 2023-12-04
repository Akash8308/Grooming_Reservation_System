import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/user/userhomepage/homepage.component';
import { RouteguardService } from './services/routeguard.service';
import { UserregistrationComponent } from './components/user/userregistration/userregistration.component';
import { LpageComponent } from './components/lpage/lpage.component';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';
import { AllusersComponent } from './components/admin/allusers/allusers.component';
import { AllsalonsComponent } from './components/admin/allsalons/allsalons.component';
import { AppointmentsComponent } from './components/admin/appointments/appointments.component';
import { SalonregistrationComponent } from './components/salon/salonregistration/salonregistration.component';
import { SalonLoginComponent } from './components/salon/salonlogin/salonlogin.component';
import { SalonhomepageComponent } from './components/salon/salonhomepage/salonhomepage.component';
import { SalonrequestsComponent } from './components/admin/salonrequests/salonrequests.component';
import { ViewuserComponent } from './components/user/viewuser/viewuser.component';
import { ViewallsalonComponent } from './components/user/viewallsalon/viewallsalon.component';
import { ViewallstylistComponent } from './components/user/viewallstylist/viewallstylist.component';
import { ViewallserviceComponent } from './components/user/viewallservice/viewallservice.component';
import { ViewaallappoinmentComponent } from './components/user/viewaallappoinment/viewaallappoinment.component';
import { UpdateaddressComponent } from './components/user/updateaddress/updateaddress.component';
import { UseraddressComponent } from './components/user/useraddressregister/useraddress.component';
import { ViewaddressComponent } from './components/user/viewaddress/viewaddress.component';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { AllstylistComponent } from './components/salon/allstylist/allstylist.component';
import { AddstylistComponent } from './components/salon/addstylist/addstylist.component';
import { SalonprofileComponent } from './components/salon/salonprofile/salonprofile.component';
import { EditsalonComponent } from './components/admin/editsalon/editsalon.component';
import { AllserviceComponent } from './components/salon/allservice/allservice.component';
import { AddserviceComponent } from './components/salon/addservice/addservice.component';


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
  { path:" viewuser",component:ViewuserComponent },
  { path:" viewallsalon",component:ViewallsalonComponent },
  { path:" viewallstylist",component:ViewallstylistComponent },
  { path:" viewallservice",component:ViewallserviceComponent },
  { path:" viewallappoinment",component:ViewaallappoinmentComponent },
  { path:" useraddressregister",component:UseraddressComponent },
  { path:" viewaddress",component:ViewaddressComponent },
  { path:" updateaddress",component:UpdateaddressComponent},
  { path:" updateuser",component:UpdateuserComponent},
  { path: "allstylist", component:AllstylistComponent},
  { path: "addstylist", component:AddstylistComponent},
  { path: "salonprofile", component:SalonprofileComponent},
  { path: "editsalon",component:EditsalonComponent},
  { path: "allservice",component:AllserviceComponent},
  { path: "addservice",component:AddserviceComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
