import { Component, Input, OnChanges, SimpleChanges, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss',
})
export class SquareComponent {
  // @Input() inputNum: number = 0;
  // result = this.inputNum * this.inputNum;

  inputNum = input(0);
  result = computed(() => this.inputNum() * this.inputNum());

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.result = this.inputNum * this.inputNum;
  // }
}
