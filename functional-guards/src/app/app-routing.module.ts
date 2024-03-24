import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthGuard } from './auth.guard';
import { authGuardFn } from './authGuardFn';
import { AuthService } from './auth.service';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "user", component: UserComponent
  },
  {
    path: "admin", component: AdminComponent, canActivate: [() => {
      const auth = inject(AuthService);
      const router = inject(Router);
      if (auth.isLoggedIn) {
        return true;
      }
      router.navigate(['access-denied']);
      return false;
    }]
  },
  {
    path: "access-denied", component: AccessDeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
