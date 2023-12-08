import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherComponent } from '../another/another.component';

@Component({
  selector: 'app-special',
  standalone: true,
  imports: [CommonModule, AnotherComponent],
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent {

}
