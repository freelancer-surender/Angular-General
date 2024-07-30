import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ModelComponent } from './model/model.component';
import { QueryComponent } from './query/query.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, ModelComponent, QueryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
