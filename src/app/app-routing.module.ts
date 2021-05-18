import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LocationsComponent } from "./pages/locations/locations.component";
import { PaymentComponent } from './pages/payment/payment.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ReviewComponent } from './pages/review/review.component';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'aboutUs', component: AboutUsComponent },
  { path:'contactUs', component: ContactUsComponent },
  { path:'appointment', component: AppointmentComponent },
  { path:'locations', component: LocationsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'review', component: ReviewComponent},
  { path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
