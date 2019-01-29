import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
@Component({
  selector: 'app-sa-sports',
  templateUrl: './sa-sports.component.html',
  styleUrls: ['./sa-sports.component.css']
})
export class SaSportsComponent implements OnInit {

  sportsNews:any=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getSudiaSportData().subscribe(data => {
      this.sportsNews = data.articles;
      // console.log(data)
    })
  }

}
