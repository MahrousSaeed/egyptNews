import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: 'app-en-sports',
  templateUrl: './en-sports.component.html',
  styleUrls: ['./en-sports.component.css']
})
export class EnSportsComponent implements OnInit {
  sportsNews:any=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getEnSportData().subscribe(data => {
      this.sportsNews = data.articles;
      // console.log(data)
    })
  }

}
