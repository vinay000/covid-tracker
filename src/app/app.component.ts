import { Component } from '@angular/core';
import {CovidService} from './services/covid.service'
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-tracker';
  constructor(public covid:CovidService){}

  public global;
  public countries:any;
  public country:string
  confirmed:number;
  recovered:number;
  deaths:number;
  countryName:string

  
  ngOnInit(){
    this.covid.getCountries().subscribe(
    (data)=>{
    this.countries = data;
    }
    )

    this.covid.getGlobal().subscribe(
      (res:any)=>{
        this.global = res.Global
       console.log(this.global);
       
      }
    )
  }

  selectCountry(country:string){
    this.country = country;
    
  }

  getByCountry(){
      this.covid.getCovidCases(this.country).subscribe(
        (data:any)=>{
          console.log(data)
          var index = data.length - 1
          console.log(index)
          this.confirmed = data[index].Confirmed;
          this.recovered = data[index].Recovered;
          this.deaths = data[index].Deaths;
          this.countryName=this.country

        }
      )
  }

}
