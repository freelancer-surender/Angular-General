import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firstName = "Harry";
  lastName = "Potter";
  salutation = "Mr.";
  // fullName = this.firstName + " " + this.lastName;
  // fullName = this.salutation + " " + this.lastName;

  cart = [
    {id: 1, name: "Pen", price: 20, quantity: 5},
    {id: 2, name: "Pencil", price: 3, quantity: 10},
    {id: 3, name: "Eraser", price: 5, quantity: 8},
  ];

  student = {
    name: "Ron",
    age: 25,
    details: {
      address: {
        permanent: {
          number: 22,
          street: "Hogwarts Lane"
        },
        contact: {
          number: 78,
          street: "Dragon Street"
        }
      }
    }
  }

  items$ = of([2, 4, 1, 2, 4, 5]);


}
