import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "Pakistan" },
    { id: 4, name: "Germany" },
    { id: 5, name: "Tunisia" },
    { id: 6, name: "Egypt" },
    { id: 7, name: "Brazil" },
    { id: 8, name: "Canada" }
  ];

  constructor() { }

  getCountries() {
    return this.countries;
  }
}
