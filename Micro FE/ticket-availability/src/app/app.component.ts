import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  movieId: number | null = null;
  availability: any[] = [43, 212, 9, 119, 20, 98];
  availableTickets = 0;

  ngOnInit(): void {
    window.addEventListener('movieSelected', (event: Event) => {
      const customEvent = event as CustomEvent;
      this.movieId = customEvent?.detail?.movieId;
      this.getAvailability();
    });
  }

  getAvailability() {
    this.availableTickets = this.availability[this.movieId!];
  }

  ngOnDestroy(): void {
    window.removeEventListener('movieSelected', (event: Event) => {});
  }

}
