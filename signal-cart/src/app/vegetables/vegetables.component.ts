import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent implements OnInit {

  onion = {
    id: 4,
    name: "Onion",
    pic: "https://m.media-amazon.com/images/I/61KfrMFGLnL._AC_UF1000,1000_QL80_.jpg",
    price: 55,
    qty: 1
  };

  tomato = {
    id: 5,
    name: "Tomato",
    pic: "https://images-cdn.ubuy.co.in/6529afb98c1f3601c312d547-fresh-roma-tomato-each.jpg",
    price: 42,
    qty: 1
  };

  potato = {
    id: 6,
    name: "Potato",
    pic: "https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg",
    price: 47,
    qty: 1
  };


  constructor() { }

  ngOnInit(): void {
  }

}
