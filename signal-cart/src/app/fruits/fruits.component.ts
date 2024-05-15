import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  apple = {
    id: 1,
    name: "Apple",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8cqwcVTXLr1ClylUyrurV8kYdPaEztkbhrbpdQxgMQ&s",
    price: 121,
    qty: 1
  };

  orange = {
    id: 2,
    name: "Orange",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYULfyHjH_W8xgKqCv5cd_OJaR4oNNpqf_J71WXyeQg&s",
    price: 73,
    qty: 1
  };

  grapes = {
    id: 3,
    name: "Grapes",
    pic: "https://5.imimg.com/data5/VU/MR/MY-24751011/purple-grapes-500x500.jpg",
    price: 55,
    qty: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
