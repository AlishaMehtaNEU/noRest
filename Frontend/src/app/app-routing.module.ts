import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DonationComponent } from './donation/donation.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalEachComponent } from './animal/animal-each/animal-each.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{ path: '', component: DashboardViewComponent },
  { path: 'events', component: EventListComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'animal', component:AnimalComponent },
  { path: 'signUpOrLogin/:param', component: SignUpComponent },
  { path: 'animaleach', component:AnimalEachComponent },
  { path: 'aboutUs', component:AboutUsComponent},
  { path: 'contactUs', component:ContactUsComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
