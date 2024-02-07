import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { NeighborComponent } from './neighbor/neighbor.component';
import { DetailComponent } from './detail/detail.component';
import { SharedService } from './shared.service';

const routes: Routes = [
  {
    path: "", redirectTo: "parent", pathMatch: "full"
  },
  {
    path: "parent", component: ParentComponent, providers: [SharedService]
  },
  {
    path: "neighbor",
    component: NeighborComponent,
    providers: [SharedService],
    children: [
      { path: "detail", component: DetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
