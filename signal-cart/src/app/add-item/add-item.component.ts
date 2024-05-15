import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() addItemToCart = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addItemToCart.emit();
    // this.cartService.refreshCart.next("");
  }

}
