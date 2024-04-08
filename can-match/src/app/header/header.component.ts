import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private auth: AuthService) {}

  home() {
    this.router.navigate(['home']);
  }

  dashboard() {
    // if (this.auth.isLoggedIn) {
    //   this.router.navigate(['admin-dashboard']);
    // } else {
    //   this.router.navigate(['user-dashboard']);
    // }
    this.router.navigate(['dashboard']);
  }
}
