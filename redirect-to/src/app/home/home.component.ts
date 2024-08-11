import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  userId = 0;

  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.isLoading.set(true);
    this.dataService.getUser().subscribe((res: any) => {
      this.userId = res.id;
      this.sharedService.isLoading.set(false);
    });
  }
}
