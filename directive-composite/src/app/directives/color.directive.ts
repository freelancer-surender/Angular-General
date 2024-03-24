import { Directive } from '@angular/core';
import { BorderDirective } from './border.directive';

@Directive({
  selector: '[appColor]',
  host: { style: 'color: #FFFFFF; background-color: #14213D' },
  standalone: true,
  hostDirectives: [BorderDirective]
})
export class ColorDirective {

  constructor() { }

}
