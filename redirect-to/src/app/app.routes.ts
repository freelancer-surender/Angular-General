import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserDetailsComponent },
  { path: 'check', redirectTo: (routeSnapshot) => {
    // console.log(routeSnapshot);
    let userId = routeSnapshot.queryParams['id'];
    if (userId) {
      return 'user?id=' + userId;
    } else {
      return 'error';
    }
    // return 'user';
  }},
  { path: 'error', component: ErrorComponent },
];
