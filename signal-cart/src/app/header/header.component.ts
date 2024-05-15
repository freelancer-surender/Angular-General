import { Component, OnInit, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeTab = "fruits";
  // points = 0;
  points = computed(() => Math.floor(this.cartService.totalValue() * 4 / 100));

  constructor(private router: Router, public cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.refreshHeader.subscribe(res => {
    //   this.refreshPoints();
    // });
  }

  goToFruits() {
    this.activeTab = "fruits";
    this.router.navigate(['fruits']);
  }

  goToVegetables() {
    this.activeTab = "vegetables";
    this.router.navigate(['vegetables']);
  }

  openCart() {
    // this.cartService.showCart.next(true);
    this.cartService.showCart.set(true);
  }

  // refreshPoints() {
  //   this.points = Math.floor(this.cartService.totalValue * 4 / 100);
  // }

}
