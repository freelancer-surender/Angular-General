import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  // {
  //   path: "dashboard-one", component: DashboardOneComponent
  // },
  // {
  //   path: "dashboard-two", component: DashboardTwoComponent
  // },
  {
    path: "dashboard-one", loadChildren: () => import('./dashboard-one/dashboard-one.module').then(m => m.DashboardOneModule)
  },
  {
    path: "dashboard-two", loadChildren: () => import('./dashboard-two/dashboard-two.module').then(m => m.DashboardTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
