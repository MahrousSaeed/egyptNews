import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
interface myData {
  articles:object;
 }
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  string:string = "sefsef sefsef sefesfs";
  constructor(private http:HttpClient) { }

  getHomeData(){
    return this.http.get<myData>('https://newsapi.org/v2/top-headlines?country=eg&apiKey=83159f3fcd1042f0b9358d05596c9c88')
  
  }
  getEgSportData(){
    return this.http.get<myData>('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=83159f3fcd1042f0b9358d05596c9c88')
  
  }
  getEnSportData(){
    return this.http.get<myData>('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=83159f3fcd1042f0b9358d05596c9c88')
  
  }
  getSudiaSportData(){
    return this.http.get<myData>('https://newsapi.org/v2/top-headlines?country=ae&category=sports&apiKey=83159f3fcd1042f0b9358d05596c9c88')
  
  }
  getBusinessData(){
    return this.http.get<myData>('https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=83159f3fcd1042f0b9358d05596c9c88')
  
  }
  getTechnologyData(){
    return this.http.get<myData>('https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=83159f3fcd1042f0b9358d05596c9c88')
  
  }
  getHealthData(){
    return this.http.get<myData>('https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=83159f3fcd1042f0b9358d05596c9c88')
  
  }
  getScienceData(){
    return this.http.get<myData>('https://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=83159f3fcd1042f0b9358d05596c9c88')
  
  }
}
