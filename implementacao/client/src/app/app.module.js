"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("rxjs/add/operator/map");
var app_component_1 = require("./app.component");
// Angular Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
// Custom Modules 
var app_routes_1 = require("./app.routes");
var widget_module_1 = require("./components/widget/widget.module");
var thumbnail_module_1 = require("./components/thumbnail/thumbnail.module");
var columnList_module_1 = require("./components/columnList/columnList.module");
// Views - Components
var home_component_1 = require("./views/home/home.component");
var moviesList_component_1 = require("./views/movies/moviesList.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            // Modules - Angular
            platform_browser_1.BrowserModule, http_1.HttpModule,
            // Modules - Custom 
            app_routes_1.routing,
            widget_module_1.WidgetModule,
            thumbnail_module_1.ThumbnailModule,
            columnList_module_1.ColumnListModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            moviesList_component_1.MoviesListComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map