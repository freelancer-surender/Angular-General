import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      this.userId = res['id'];
      this.getUserDetail();
    });
  }

  getUserDetail() {
    this.sharedService.isLoading.set(true);
    this.dataService.getUserDetail(this.userId).subscribe(
      (user) => {
        this.user = user;
        this.sharedService.isLoading.set(false);
      }, (err) => {
        this.sharedService.isLoading.set(false);
        this.router.navigate(['error']);
      }
    );
  }
}
