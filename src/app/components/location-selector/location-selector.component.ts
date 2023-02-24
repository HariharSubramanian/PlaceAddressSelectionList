import { Component } from '@angular/core';

@Component({
  selector: 'address-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css']
})
export class LocationSelectorComponent {

  public isDisabledStates = true;
  public isDisabledCity = true;

  public defaultCountry: { countryName: string; countryId: number | any } = {
    countryName: "Select Country",
    countryId: null,
  };

  public defaultState: { stateName: string, stateId: number | any } = {
    stateName: "Select State",
    stateId: null,
  };

  public defaultCity: { cityName: string, cityId: number | any } = {
    cityName: "Select City",
    cityId: null,
  };

  public dataCountry: Array<{ countryName: string; countryId: number }> = [
    { countryName: "Mexico", countryId: 1 },
    { countryName: "Spain", countryId: 2 },
    { countryName: "India", countryId: 3 },
    { countryName: "Australia", countryId: 4 },
  ];

  public dataState: Array<{ stateName: string, stateId: number, countryId: number }> = [
    { stateName: "Aguascalientes", stateId: 1, countryId: 1 },
    { stateName: "Durango", stateId: 2, countryId: 1 },
    { stateName: "Madrid", stateId: 7, countryId: 2 },
    { stateName: "Toledo", stateId: 8, countryId: 2 },
    { stateName: "Kerala", stateId: 10, countryId: 3 },
    { stateName: "Tamil Nadu", stateId: 11, countryId: 3 },
    { stateName: "New South Wales", stateId: 13, countryId: 4 },
    { stateName: "Queensland", stateId: 14, countryId: 4 },
  ];

  public dataCity: Array<{ cityName: string, cityId: number, stateId: number }> = [
    { cityName: "El Llano", cityId: 2, stateId: 1 },
    { cityName: "Rincón de Romos", cityId: 3, stateId: 1 },
    { cityName: "Indé", cityId: 7, stateId: 2 },
    { cityName: "Pueblo Nuevo", cityId: 8, stateId: 2 },
    { cityName: "El Álamo", cityId: 26, stateId: 7 },
    { cityName: "La Hiruela", cityId: 27, stateId: 7 },
    { cityName: "Almorox", cityId: 29, stateId: 8 },
    { cityName: "Pelahustán", cityId: 32, stateId: 8 },
    { cityName: "Thalassery", cityId: 37, stateId: 10 },
    { cityName: "Kozhikode", cityId: 38, stateId: 10 },
    { cityName: "Chennai", cityId: 41, stateId: 11 },
    { cityName: "Thanjavur", cityId: 42, stateId: 11 },
    { cityName: "Sydney", cityId: 51, stateId: 13 },
    { cityName: "Newcastle", cityId: 52, stateId: 13 },
    { cityName: "Westbrook", cityId: 55, stateId: 14 },
    { cityName: "Brisbane", cityId: 56, stateId: 14 },
  ];

  public dataResultState: Array<{
    stateName: string;
    stateId: number;
    countryId: number;
  }>;

  public dataResultCity: Array<{
    cityName: string;
    cityId: number;
    stateId: number;
  }>;

  public selectedCountry: { countryName: string; countryId: number; } | any;
  public selectedState: { stateName: string, stateId: number } | any;
  public selectedCity: { cityName: string, cityId: number } | any;

  handleCountryChange(value: any) {
    this.selectedCountry = value;
    this.selectedState = undefined;
    this.selectedCity = undefined;

    if(value.countryId === this.defaultCountry.countryId) {
      this.isDisabledStates = true;
      this.dataResultState = [];
    }
    else {
      this.isDisabledStates = false;
      this.dataResultState = this.dataState.filter(
        (s) => s.countryId === value.countryId
      );
    }
    this.isDisabledCity = true;
    this.dataResultCity = [];

  }

  handleStateChange(value: any) {

    this.selectedState = value;
    this.selectedCity = undefined;

    if (value.stateId === this.defaultState.stateId) {
      this.isDisabledCity = true;
      this.dataResultCity = [];
    }
    else {
      this.isDisabledCity = false;
      this.dataResultCity = this.dataCity.filter(
        (s) => s.stateId === value.stateId
      );
    }

  }

  handleCityChange(value: any) {
    this.selectedCity = value;
  }

}
