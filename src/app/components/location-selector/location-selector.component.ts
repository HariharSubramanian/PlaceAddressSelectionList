import { Component } from '@angular/core';

import { Country, State, City } from 'country-state-city';

import { ICountry, IState, ICity } from 'country-state-city';

@Component({
  selector: 'address-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css']
})
export class LocationSelectorComponent {

  public isDisabledStates = true;
  public isDisabledCity = true;

  countryList ?: ICountry[];
  
  constructor() {
    this.countryList = Country.getAllCountries();
  }

  public defaultCountry: ICountry = {
    name: 'Select Country',
    phonecode: '',
    isoCode: '',
    flag: '',
    currency: '',
    latitude: '',
    longitude: ''
  };

  public defaultState: IState = {
    name: 'Select State',
    isoCode: '',
    countryCode: ''
  };

  public defaultCity: ICity = {
    name: 'Select City',
    countryCode: '',
    stateCode: ''
  };

  public dataResultState?: IState[];

  public dataResultCity?: ICity[];

  public selectedCountry!: ICountry;
  public selectedState?: IState;
  public selectedCity?: ICity;

  handleCountryChange(value: ICountry) {
    this.selectedCountry = value;
    this.selectedState = undefined;
    this.selectedCity = undefined;

    if(value.isoCode === this.defaultCountry.isoCode) {
      this.isDisabledStates = true;
      this.dataResultState = [];
    }
    else {
      this.isDisabledStates = false;
      this.dataResultState = State.getStatesOfCountry(value.isoCode);
    }
    this.isDisabledCity = true;
    this.dataResultCity = [];

  }

  handleStateChange(value: IState) {

    this.selectedState = value;
    this.selectedCity = undefined;

    if (value.isoCode === this.defaultState.isoCode) {
      this.isDisabledCity = true;
      this.dataResultCity = [];
    }
    else {
      this.isDisabledCity = false;
      this.dataResultCity = City.getCitiesOfState(this.selectedCountry.isoCode,value.isoCode);
    }

  }

  handleCityChange(value: ICity) {
    this.selectedCity = value;
  }

}
