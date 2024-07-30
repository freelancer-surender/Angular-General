import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  num = 0;

  calculate(el: any) {
    this.num = el.value;
  }
}
