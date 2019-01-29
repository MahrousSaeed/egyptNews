import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceNews:any=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getScienceData().subscribe(data => {
      this.scienceNews = data.articles;
      // console.log(data)
    })
  }

}
