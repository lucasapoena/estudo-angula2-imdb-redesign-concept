import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'moviesList',
    templateUrl: './moviesList.component.html'
})

export class MoviesListComponent{

    apiHost2: String;
    movies: Object[] = []

    constructor(http:Http){      

        this.apiHost2 = "http://localhost:3002";
        
        http.get(this.apiHost2+'/movies')
        .map(res => res.json())     
        .subscribe(
            movies => this.movies = movies,
            erro => console.log(erro)
        );
    }
}