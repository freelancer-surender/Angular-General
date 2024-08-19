import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WidgetComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  plans = [
    {
      id: 1,
      name: 'Free',
      price: '$0.00 / Month',
      features: [
        '2 GB Storage',
        '1 Website',
        '1 Email Account',
        '5 GB Bandwidth',
      ],
    },
    {
      id: 2,
      name: 'Basic',
      price: '$29.99 / Month',
      features: [
        '50 GB Storage',
        '20 Websites',
        'Free Email',
        '100 GB Bandwidth',
        'Standard DDoS Protection',
      ],
    },
    {
      id: 3,
      name: 'Premium',
      price: '$79.99 / Month',
      features: [
        'Unlimited Storage',
        '150 Websites',
        'Free Email',
        'Unlimited Bandwidth',
        'Enhanced DDoS Protection',
        '24/7 Customer Support',
      ],
    },
  ];
}
