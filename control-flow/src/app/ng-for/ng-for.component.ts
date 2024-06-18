import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss',
})
export class NgForComponent {
  nums = [15, 23, 44, 56, 67, 71, 82, 90];
}
