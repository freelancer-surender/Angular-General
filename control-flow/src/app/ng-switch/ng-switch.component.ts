import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.scss'
})
export class NgSwitchComponent {

  type = 'green-square';

  draw(type: string) {
    this.type = type;
  }
}
