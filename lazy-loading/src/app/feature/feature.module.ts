import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BarComponent,
    LineComponent,
    PieComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,    
    NgChartsModule,
  ],
  exports: [
    BarComponent,
    LineComponent,
    PieComponent,
    DoughnutComponent
  ]
})
export class FeatureModule { }
