import { BrowserModule } from '@angular/platform-browser';
import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
// import {Api} from 'api-service.service.ts';
import {Routes,RouterModule} from '@angular/router';
import { ApiServiceService } from "src/app/api-service.service";
import {HttpClientModule} from '@angular/common/http';
import { BusinessComponent } from './business/business.component';
import { EnSportsComponent } from './en-sports/en-sports.component';
import { SaSportsComponent } from './sa-sports/sa-sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SearchPipe } from './search.pipe';

const routing:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sport',
    component:SportsComponent
  },
  {
    path:'ensport',
    component:EnSportsComponent
  },
  {
    path:'sasports',
    component:SaSportsComponent
  },
  {
    path:'business',
    component:BusinessComponent
  },
  {
    path:'technology',
    component:TechnologyComponent
  },
  {
    path:'health',
    component:HealthComponent
  },
  {
    path:'science',
    component: ScienceComponent
  }
  

  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    BusinessComponent,
    EnSportsComponent,
    SaSportsComponent,
    TechnologyComponent,
    HealthComponent,
    ScienceComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routing),
    NgxNewstickerAlbeModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
