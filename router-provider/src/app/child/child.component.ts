import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

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
