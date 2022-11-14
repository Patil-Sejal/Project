import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourierComponent } from './courier/courier.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { DetailsComponent } from './shipment/details/details.component';
import { AboutComponent } from './about/about.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'courier', component : CourierComponent},
  { path : 'dashboard', component : DashboardComponent,canActivate:[AdminGuard]},
  { path : 'frontpage', component:FrontpageComponent},
  {path  : 'service',component:ServiceComponent},
  {path  : 'contact',component:ContactComponent},
  {path  : 'customer',component:CustomerComponent},
  {path  : 'shipment',component:ShipmentComponent},
  {path  :'details',component:DetailsComponent},
  {path  :'about',component:AboutComponent},
  { path : '',redirectTo : 'frontpage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
