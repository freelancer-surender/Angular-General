import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-ng-if-else',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-if-else.component.html',
  styleUrl: './ng-if-else.component.scss',
})
export class NgIfElseComponent {

  isRed = false;
  isCircle = false;
  active = 'green-square';

  draw(type: string) {
    this.active = type;
    this.isRed = false;
    this.isCircle = false;
    if (type === 'red-circle') {
      this.isRed = true;
      this.isCircle = true;
    } else if (type === 'red-square') {
      this.isRed = true;
      this.isCircle = false;
    } else if (type === 'green-circle') {
      this.isRed = false;
      this.isCircle = true;
    } else {
      this.isRed = false;
      this.isCircle = false;
    }
  }
  
}
