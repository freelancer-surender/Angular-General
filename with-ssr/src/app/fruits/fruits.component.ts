import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  isLoading = false;
  fruits: any = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.data.getFruitsData().subscribe((res: any) => {
      this.isLoading = false;
      this.fruits = res;
    });
  }
}
