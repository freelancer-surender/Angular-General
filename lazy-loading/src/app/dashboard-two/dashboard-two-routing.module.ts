import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardTwoComponent } from './dashboard-two.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTwoRoutingModule { }