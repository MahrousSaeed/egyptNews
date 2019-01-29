import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  techNews:any=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getTechnologyData().subscribe(data => {
      this.techNews = data.articles;
      // console.log(data)
    })
  }

}

