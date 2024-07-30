import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './query.component.html',
  styleUrl: './query.component.scss'
})
export class QueryComponent {

  // @ViewChild('textInput', {static: false}) textInput!: ElementRef;

  textInput = viewChild<ElementRef>('textInput');
  // square = viewChild(SquareComponent);

  focus() {
    // this.textInput.nativeElement.focus();
    this.textInput()?.nativeElement.focus();
  }

}
