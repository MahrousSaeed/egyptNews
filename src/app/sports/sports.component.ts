import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportsNews:any=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getEgSportData().subscribe(data => {
      this.sportsNews = data.articles;
      // console.log(data)
    })
  }

}
