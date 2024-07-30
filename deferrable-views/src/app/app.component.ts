import { Component } from '@angular/core';
import { BoxOneComponent } from './box-one/box-one.component';
import { BoxTwoComponent } from './box-two/box-two.component';
import { BoxThreeComponent } from './box-three/box-three.component';
import { BoxFourComponent } from './box-four/box-four.component';
import { BoxFiveComponent } from './box-five/box-five.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BoxOneComponent,
    BoxTwoComponent,
    BoxThreeComponent,
    BoxFourComponent,
    BoxFiveComponent,
    PlaceHolderComponent,
    SpinnerComponent,
    ErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isVisible = false;
  show() {
    this.isVisible = true;
  }
}
