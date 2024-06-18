import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-track-by',
  standalone: true,
  imports: [NgFor],
  templateUrl: './track-by.component.html',
  styleUrl: './track-by.component.scss',
})
export class TrackByComponent {
  countries = [
    { id: 1, name: 'India' },
    { id: 2, name: 'United States' },
    { id: 3, name: 'Pakistan' },
    { id: 4, name: 'Canada' },
    { id: 5, name: 'Germany' },
  ];

  update() {
    this.countries = [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Pakistan' },
      { id: 4, name: 'Canada' },
      { id: 5, name: 'Germany' },
    ];
  }

  trackById(index: number, item: any) {
    return item.id;
  }

}
