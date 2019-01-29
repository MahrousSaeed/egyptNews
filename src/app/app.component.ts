import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'egypt';
  constructor(){

  }
  ngOnInit(){
    $('.nav-link').on('click',function(){
      $(this).parent().siblings().removeClass('active')
      $(this).parent().addClass('active')
    })
    $(window).on('scroll',function(){
      if(window.scrollY > 5){
        $('.navbar').css({backgroundColor:'#c31e1e'});
        $('.navbar-brand img').css({width:'65px'});
        
      } else{
        $('.navbar').css({backgroundColor: 'transparent'});
        $('.navbar-brand img').css({width:'110px'});
      }
    })
  }
}
