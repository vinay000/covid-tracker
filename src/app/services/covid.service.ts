import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';

// interface Incovid{

// }

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getGlobal(){
    const Url = "https://api.covid19api.com/summary"
    return this.http.get(Url);
  }

  getCountries(){
    const Url = "https://api.covid19api.com/countries"
    return this.http.get(Url);
  }

  getCovidCases(country:string){
    console.log("c",country)
    const Url = "https://api.covid19api.com/total/dayone/country/"+ country;
    return this.http.get(Url)
    
  }

}
