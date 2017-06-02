import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { MoviesListComponent } from "./views/movies/moviesList.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },    
    { path: 'movies', component: MoviesListComponent }, 
    { path: 'movies/:id', component: MoviesListComponent }, 
    { path: '**', redirectTo: '' }, 
];

export const routing = RouterModule.forRoot(appRoutes);