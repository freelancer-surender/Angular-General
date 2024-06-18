import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss',
})
export class EmptyComponent {
  items: any[] = [];
  // items: any[] = [
  //   {id: 1, name: "Pen", count: 100},
  //   {id: 2, name: "Pencil", count: 200},
  //   {id: 3, name: "Eraser", count: 50},
  //   {id: 4, name: "Sharpener", count: 25},
  //   {id: 5, name: "Ruler", count: 25},
  // ];
}
