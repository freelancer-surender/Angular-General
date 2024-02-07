import { Component, Input, OnInit } from '@angular/core';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.scss'],
    standalone: true,
    imports: [NgbRating]
})
export class StarRatingComponent implements OnInit {

  @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
