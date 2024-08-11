import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isLoading = signal(false);

  constructor() {}
}
