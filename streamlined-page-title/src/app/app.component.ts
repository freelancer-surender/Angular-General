import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     const url = event.url;
    //     this.updatePageTitle(url);
    //   }
    // });
  }

  // private updatePageTitle(url: string) {
  //   const routeObj = this.router.config.find((route) => ("/" + route.path) === url);
  //   let routeData = routeObj?.data;
  //   if (routeData && routeData['title']) {
  //     this.titleService.setTitle(routeData['title']);
  //   } else {
  //     this.titleService.setTitle('Default Title');
  //   }
  // }
}
