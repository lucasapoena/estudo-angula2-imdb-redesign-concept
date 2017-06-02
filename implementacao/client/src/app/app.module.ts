import 'rxjs/add/operator/map';

import { AppComponent }  from './app.component';
// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

// Custom Modules 
import { routing } from "./app.routes";
import { WidgetModule }  from './components/widget/widget.module';
import { ThumbnailModule }  from './components/thumbnail/thumbnail.module';
import { ColumnListModule } from "./components/columnList/columnList.module";

// Views - Components
import { HomeComponent } from "./views/home/home.component";
import { MoviesListComponent } from "./views/movies/moviesList.component";

@NgModule({
  imports: [ 
    // Modules - Angular
    BrowserModule, HttpModule,
    // Modules - Custom 
    routing,
    WidgetModule, 
    ThumbnailModule, 
    ColumnListModule 
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    MoviesListComponent  
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
