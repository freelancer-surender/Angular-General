import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  movies: any[] = [
    {
      id: 1,
      title: 'Inception',
      poster: 'http://localhost:4201/images/inception.jpg',
    },
    {
      id: 2,
      title: 'The Dark Knight',
      poster: 'http://localhost:4201/images/dark-knight.jpg',
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: 'http://localhost:4201/images/interstellar.jpg',
    },
    {
      id: 4,
      title: 'The Matrix',
      poster: 'http://localhost:4201/images/matrix.jpg',
    },
    {
      id: 5,
      title: 'Avengers',
      poster: 'http://localhost:4201/images/endgame.jpg',
    },
  ];

  checkAvailability(id: number) {
    window.dispatchEvent(new CustomEvent('movieSelected', {detail: { movieId: id}}));
  }
}
