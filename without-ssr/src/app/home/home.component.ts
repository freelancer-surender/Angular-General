import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "";
  imgUrl = "";
  isLoading = false;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.data.getHomeData().subscribe((res: any) => {
      this.title = res.title;
      this.imgUrl = res.img;
      this.isLoading = false;
    });
  }
}
