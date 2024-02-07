import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // providers: [SharedService]
})
export class ParentComponent {

  count = this.shared.count;

  constructor(private shared: SharedService) { }

  increase() {
    this.count++;
    this.shared.count = this.count;
  }

  refresh() {
    this.count = this.shared.count;
  }

}
