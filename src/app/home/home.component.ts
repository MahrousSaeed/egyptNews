import { Component, OnInit } from '@angular/core';
// import { ApiServiceService } from "src/app/api-service.service";
import { ApiServiceService } from "../api-service.service";
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeNews;
  sliderNews:any =[];
  bubbleNews2:any =[];
  bubbleNews:any =[];
  eventList:any = [];

  // eventList:any[] = ['lkslaj asakfsjioajf ajfoaijfoiajf','awfuhawfiu awfhiuawfha awfuhaiufhawf afhaufihaifu afhafhaf'];
  constructor(private apiService:ApiServiceService) { 

  }

  ngOnInit() {

    this.apiService.getHomeData().subscribe(data => {
      this.homeNews = data.articles;
      for(let i=0; i<=4 ; i++){
        // console.log(data.articles[i])
        this.sliderNews.push(data.articles[i])
      }
      for(let i=5; i<=6 ; i++){
        // console.log(data.articles[i])
        this.bubbleNews.push(data.articles[i])
      }
      for(let i=7; i<=9 ; i++){
        // console.log(data.articles[i])
        this.bubbleNews2.push(data.articles[i])
      }
      for(let i=10; i<=14 ; i++){
        // console.log(data.articles[i])
        this.eventList.push(data.articles[i].description)
      }
      console.log(this.bubbleNews2)
    });

    
    // this.eventList.push(`<span></span> - Sed et ligula non risus ullamcorper rhoncus quis vel ante.`);
    // this.eventList.push(`<i>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<i>`);
    // this.eventList.push(`Fusce a odio interdum, <a href="#">I'm Anchor</a> rutrum lorem quis, gravida tellus.`);
  }

}
