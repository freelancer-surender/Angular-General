import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    // path: "home", component: HomeComponent, data: { title: "Home"}
    path: "home", component: HomeComponent, title: "Home"
  },
  {
    path: 'service',
    component: ServiceComponent,
    // data: { title: "Our Services"}
    title: "Our Services"
  },
  {
    // path: "about", component: AboutComponent, data: { title: "About us"}
    path: "about", component: AboutComponent, title: "About us"
  },
  {
    // path: "contact", component: ContactComponent, data: { title: "Contact us"}
    path: "contact", component: ContactComponent, title: "Contact us"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
