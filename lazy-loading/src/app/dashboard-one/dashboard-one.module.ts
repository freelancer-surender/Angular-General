import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOneComponent } from './dashboard-one.component';

import { DashboardOneRoutingModule } from './dashboard-one-routing.module';
import { FeatureModule } from '../feature/feature.module';

@NgModule({
  declarations: [
    DashboardOneComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
    DashboardOneRoutingModule
  ]
})
export class DashboardOneModule { }
