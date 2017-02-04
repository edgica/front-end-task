import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AppSearchPageComponent } from "./search-page/components/search-page.component";

@NgModule({
  declarations: [
    AppSearchPageComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
