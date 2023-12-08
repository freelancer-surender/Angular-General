import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTwoComponent } from './dashboard-two.component';

import { DashboardTwoRoutingModule } from './dashboard-two-routing.module';
import { FeatureModule } from '../feature/feature.module';

@NgModule({
  declarations: [
    DashboardTwoComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
    DashboardTwoRoutingModule
  ]
})
export class DashboardTwoModule { }
