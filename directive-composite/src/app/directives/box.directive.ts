import { Directive } from '@angular/core';
import { ColorDirective } from './color.directive';

@Directive({
  selector: '[appBox]',
  host: { style: "width: 900px; display: block; padding: 20px; margin: 20px" },
  standalone: true,
  hostDirectives: [ColorDirective]
})
export class BoxDirective {

  constructor() { }

}
