import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// imports the general http module and Data service we just added in data.service.ts
import {Http} from '@angular/http';
import {DataService} from './data.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Http
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
