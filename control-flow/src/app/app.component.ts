import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { TrackByComponent } from './track-by/track-by.component';
import { EmptyComponent } from './empty/empty.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIfElseComponent,
    NgForComponent,
    TrackByComponent,
    EmptyComponent,
    NgSwitchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
