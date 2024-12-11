import { Component, signal, computed, linkedSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormsModule],
})
export class AppComponent {
  
  firstProduct = 'PIANAI Portable Charger Solar Power Bank 100000mah';
  firstImage = 'pb.jpg';
  firstPrice = 85;
  secondProduct = 'USB A to C type cable';
  secondImage = 'ch.jpg';
  secondPrice = 9;
  shipping = 7;

  firstQuantity = signal(1);
  secondQuantity = signal(2);

  firstTotal = computed(() => this.firstQuantity() * this.firstPrice);
  secondTotal = computed(() => this.secondQuantity() * this.secondPrice);
  subTotal = computed(() => this.firstTotal() + this.secondTotal());
  // total = linkedSignal(() => this.subTotal() + this.shipping);
  total = linkedSignal({
    source: this.subTotal,
    computation:() => this.subTotal() + this.shipping
  });

  constructor() {}

  applyCoupon() {
    this.total.set(this.total() - 50);
  }

}
