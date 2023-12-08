import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  searchTxt = "";

  countries: any[] = [];

  constructor(private countryService: CountryService, private stateService: StateService) { }

  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
  }

  getState(id: number) {
    return this.stateService.getState(id);
  }

}
