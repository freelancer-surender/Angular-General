import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "fruits", component: FruitsComponent
  },
  {
    path: "vegetables", component: VegetablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
