import { Directive } from '@angular/core';
import { BorderDirective } from './border.directive';
import { BoxDirective } from './box.directive';

@Directive({
  selector: '[appBorderBox]',
  hostDirectives: [BorderDirective, BoxDirective],
  standalone: true
})
export class BorderBoxDirective {

  constructor() { }

}
