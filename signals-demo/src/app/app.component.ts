import { Component, OnInit, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  count = signal(0);
  colors = signal(["Red", "Green"]);
  length = signal(20);
  breadth = signal(40);
  area = computed(() => this.length() * this.breadth());

  // a = 10;
  // b = 20;
  // c = this.a + this.b;

  a = signal(10);
  b = signal(20);
  c = computed(() => this.a() + this.b());

  constructor() { 
    effect(() => {
      // this.count.set(5);
      console.log("Effect due to count signal is triggered", this.count());
    });
    effect(() => {
      console.log("Effect due to colors signal is triggered", this.colors());
    });
  }

  ngOnInit(): void {
    console.log(this.c());
    this.a.set(50);
    console.log(this.c());
   }

  increase() {
    // this.count = this.count + 1;
    // this.count.set(7);
    this.count.update(value => value + 1);
    // this.colors.mutate(values => values.push("Blue"));
    this.colors.update(values => [...values, "Blue"]);
    // console.log(this.colors());
    // this.length.set(30);
  }

}
