import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOneComponent } from './dashboard-one.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardOneRoutingModule { }