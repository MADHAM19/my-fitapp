import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';
import {HttpClientModule}    from '@angular/common/http';


import {AppComponent} from './app.component';
import {AbbrListComponent} from './abbr-list/abbr-list.component';
import {ExerciseService} from "./exercise.service";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    AbbrListComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    // AppRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    )
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
