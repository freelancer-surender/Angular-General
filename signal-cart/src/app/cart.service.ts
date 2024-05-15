import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart: any[] = [];
  cart = signal<any[]>([]);
  // showCart = new BehaviorSubject(false);
  showCart = signal(false);
  // refreshCart = new Subject();
  // totalValue = 0;
  totalValue = signal(0);
  // refreshHeader = new Subject();

  constructor() { }
}
