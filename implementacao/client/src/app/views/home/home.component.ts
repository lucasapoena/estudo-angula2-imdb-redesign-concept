import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent{
      
  public apiHost: String;
  movies: Object[] = [];
  actors: Object[] = [];
  news: Object[] = [];

  constructor(http:Http){      

    this.apiHost = "http://localhost:3002";
    
    http.get(this.apiHost+'/movies')
      .map(res => res.json())     
      .subscribe(
        movies => this.movies = movies,
        erro => console.log(erro)
      );

    http.get(this.apiHost+'/actors')
      .map(res => res.json())     
      .subscribe(
        actors => this.actors = actors,
        erro => console.log(erro)
      );
    
    http.get(this.apiHost+'/news')
      .map(res => res.json())     
      .subscribe(
        news => this.news = news,
        erro => console.log(erro)
      );
  }
}