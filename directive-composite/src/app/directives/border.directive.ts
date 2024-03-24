import { Directive } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  host: { style: "border: 5px solid #FCA311" },
  standalone: true
})
export class BorderDirective {

  constructor() { }

}
