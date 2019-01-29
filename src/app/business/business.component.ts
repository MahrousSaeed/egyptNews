import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessNews:any=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getBusinessData().subscribe(data => {
      this.businessNews = data.articles;
      // console.log(data)
    })
  }

}
