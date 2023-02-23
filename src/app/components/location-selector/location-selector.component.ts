import { Component } from '@angular/core';

@Component({
  selector: 'address-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css']
})
export class LocationSelectorComponent {

  public isDisabledStates = true;
  public isDisabledCity = true;

  public defaultCountry: { countryName: string; countryId: number } = {
    countryName: "Select Country",
    countryId: 0,
  };

  public defaultState: { stateName: string, stateId: number } = {
    stateName: "Select State",
    stateId: 0,
  };

  public defaultCity: { cityName: string, cityId: number } = {
    cityName: "Select City",
    cityId: 0,
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
    { stateName: "Mexico City", stateId: 3, countryId: 1 },
    { stateName: "Veracruz", stateId: 4, countryId: 1 },
    { stateName: "Asturias", stateId: 5, countryId: 2 },
    { stateName: "Córdoba", stateId: 6, countryId: 2 },
    { stateName: "Madrid", stateId: 7, countryId: 2 },
    { stateName: "Toledo", stateId: 8, countryId: 2 },
    { stateName: "Andhra Pradesh", stateId: 9, countryId: 3 },
    { stateName: "Kerala", stateId: 10, countryId: 3 },
    { stateName: "Tamil Nadu", stateId: 11, countryId: 3 },
    { stateName: "Karnataka", stateId: 12, countryId: 3 },
    { stateName: "New South Wales", stateId: 13, countryId: 4 },
    { stateName: "Queensland", stateId: 14, countryId: 4 },
    { stateName: "Victoria", stateId: 15, countryId: 4 },
    { stateName: "Tasmania", stateId: 16, countryId: 4 },
  ];

  public dataCity: Array<{ cityName: string, cityId: number, stateId: number }> = [
    { cityName: "Aguascalientes", cityId: 1, stateId: 1 },
    { cityName: "El Llano", cityId: 2, stateId: 1 },
    { cityName: "Rincón de Romos", cityId: 3, stateId: 1 },
    { cityName: "Tepezalá", cityId: 4, stateId: 1 },
    { cityName: "Canelas", cityId: 5, stateId: 2 },
    { cityName: "Durango", cityId: 6, stateId: 2 },
    { cityName: "Indé", cityId: 7, stateId: 2 },
    { cityName: "Pueblo Nuevo", cityId: 8, stateId: 2 },
    { cityName: "Ecatepec de Morelos", cityId: 9, stateId: 3 },
    { cityName: "Chimalhuacán", cityId: 10, stateId: 3 },
    { cityName: "Nezahualcóyotl", cityId: 11, stateId: 3 },
    { cityName: "Tlalnepantla de Baz", cityId: 12, stateId: 3 },
    { cityName: "Acatlán", cityId: 13, stateId: 4 },
    { cityName: "Chontla", cityId: 14, stateId: 4 },
    { cityName: "Ixhuatlán de Madero", cityId: 15, stateId: 4 },
    { cityName: "Las Minas", cityId: 16, stateId: 4 },
    { cityName: "Amieva", cityId: 17, stateId: 5 },
    { cityName: "Carreño", cityId: 18, stateId: 5 },
    { cityName: "Llanes", cityId: 19, stateId: 5 },
    { cityName: "Valdés", cityId: 20, stateId: 5 },
    { cityName: "Almodóvar del Río", cityId: 21, stateId: 6 },
    { cityName: "La Granjuela", cityId: 22, stateId: 6 },
    { cityName: "Doña Mencía", cityId: 23, stateId: 6 },
    { cityName: "El Guijo", cityId: 24, stateId: 6 },
    { cityName: "Alcalá de Henares", cityId: 25, stateId: 7 },
    { cityName: "El Álamo", cityId: 26, stateId: 7 },
    { cityName: "La Hiruela", cityId: 27, stateId: 7 },
    { cityName: "Robledillo de la Jara", cityId: 28, stateId: 7 },
    { cityName: "Almorox", cityId: 29, stateId: 8 },
    { cityName: "Belvís de la Jara", cityId: 30, stateId: 8 },
    { cityName: "Espinoso del Rey", cityId: 31, stateId: 8 },
    { cityName: "Pelahustán", cityId: 32, stateId: 8 },
    { cityName: "Visakhapatnam", cityId: 33, stateId: 9 },
    { cityName: "Gudivada", cityId: 34, stateId: 9 },
    { cityName: "Kurnool", cityId: 35, stateId: 9 },
    { cityName: "Hindupur", cityId: 36, stateId: 9 },
    { cityName: "Thalassery", cityId: 37, stateId: 10 },
    { cityName: "Kozhikode", cityId: 38, stateId: 10 },
    { cityName: "Alappuzha", cityId: 39, stateId: 10 },
    { cityName: "Kottayam", cityId: 40, stateId: 10 },
    { cityName: "Chennai", cityId: 41, stateId: 11 },
    { cityName: "Thanjavur", cityId: 42, stateId: 11 },
    { cityName: "Gudiyatham", cityId: 43, stateId: 11 },
    { cityName: "Hosur", cityId: 44, stateId: 11 },
    { cityName: "Davanagere", cityId: 45, stateId: 12 },
    { cityName: "Gangavati", cityId: 46, stateId: 12 },
    { cityName: "Bangalore", cityId: 47, stateId: 12 },
    { cityName: "Bhadravati", cityId: 48, stateId: 12 },
    { cityName: "Port Macquarie", cityId: 49, stateId: 13 },
    { cityName: "Queanbeyan", cityId: 50, stateId: 13 },
    { cityName: "Sydney", cityId: 51, stateId: 13 },
    { cityName: "Newcastle", cityId: 52, stateId: 13 },
    { cityName: "Maryborough", cityId: 53, stateId: 14 },
    { cityName: "Stanthorpe", cityId: 54, stateId: 14 },
    { cityName: "Westbrook", cityId: 55, stateId: 14 },
    { cityName: "Brisbane", cityId: 56, stateId: 14 },
    { cityName: "Horsham", cityId: 57, stateId: 15 },
    { cityName: "Melbourne", cityId: 58, stateId: 15 },
    { cityName: "Castlemaine", cityId: 59, stateId: 15 },
    { cityName: "Whittlesea", cityId: 60, stateId: 15 },
    { cityName: "Brighton", cityId: 61, stateId: 16 },
    { cityName: "Kingston", cityId: 62, stateId: 16 },
    { cityName: "Evandale", cityId: 63, stateId: 16 },
    { cityName: "Huonville", cityId: 64, stateId: 16 },
  ];

  public dataResultState!: Array<{
    stateName: string;
    stateId: number;
    countryId: number;
  }>;

  public dataResultCity!: Array<{
    cityName: string;
    cityId: number;
    stateId: number;
  }>;

  public selectedCountry: { countryName: string; countryId: number; } | undefined;
  public selectedState: { stateName: string, stateId: number, countryId: number } | undefined;
  public selectedCity: { cityName: string, cityId: number, stateId: number } | undefined;

  handleCountryChange(value: any) {
    this.selectedCountry = value;
    this.selectedState = undefined;
    this.selectedCity = undefined;

    if(value.countryId == this.defaultCountry.countryId) {
      this.isDisabledStates = true;
      this.dataResultState = [];
    }
    else {
      this.isDisabledStates = false;
      this.dataResultState = this.dataState.filter(
        (s) => s.countryId == value.countryId
      );
    }
    this.isDisabledCity = true;
    this.dataResultCity = [];

  }

  handleStateChange(value: any) {

    this.selectedState = value;
    this.selectedCity = value;

    if (value.stateId == this.defaultState.stateId) {
      this.isDisabledCity = true;
      this.dataResultCity = [];
    }
    else {
      this.isDisabledCity = false;
      this.dataResultCity = this.dataCity.filter(
        (s) => s.stateId == value.stateId
      );
    }

  }

  handleCityChange(value: any) {
    this.selectedCity = value;
  }

}
