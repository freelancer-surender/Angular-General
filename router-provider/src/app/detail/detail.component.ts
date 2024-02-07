import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

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
