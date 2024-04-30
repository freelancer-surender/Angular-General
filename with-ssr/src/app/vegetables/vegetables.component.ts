import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent implements OnInit {

  isLoading = false;
  vegetables: any = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.data.getVegetablesData().subscribe((res: any) => {
      this.isLoading = false;
      this.vegetables = res;
    });
  }
}