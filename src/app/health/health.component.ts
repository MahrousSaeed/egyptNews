import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthNews:any=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
    this.apiService.getHealthData().subscribe(data => {
      this.healthNews = data.articles;
      // console.log(data)
    })
  }

}
