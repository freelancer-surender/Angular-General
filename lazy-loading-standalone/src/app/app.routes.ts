import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
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
        path: "admin", loadComponent: () => import ('./admin/admin.component').then(m => m.AdminComponent)
    }
];
