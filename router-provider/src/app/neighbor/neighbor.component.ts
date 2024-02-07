import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neighbor',
  templateUrl: './neighbor.component.html',
  styleUrls: ['./neighbor.component.scss'],
  // providers: [SharedService]
})
export class NeighborComponent {

  count = this.shared.count;

  constructor(private shared: SharedService, private router: Router) { }

  increase() {
    this.count++;
    this.shared.count = this.count;
  }
  
  refresh() {
    this.count = this.shared.count;
  }

  goToDetail() {
    this.router.navigate(['neighbor/detail']);
  }
  
}
