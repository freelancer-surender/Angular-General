import { Component, signal } from '@angular/core';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CheckBoxComponent, NgIf],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent {
  isChecked = false;

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
