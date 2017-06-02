"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./views/home/home.component");
var moviesList_component_1 = require("./views/movies/moviesList.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'movies', component: moviesList_component_1.MoviesListComponent },
    { path: 'movies/:id', component: moviesList_component_1.MoviesListComponent },
    { path: '**', redirectTo: '' },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map