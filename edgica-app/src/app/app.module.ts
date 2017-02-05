import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { DropdownModule } from 'ng2-bootstrap';
import { TooltipModule } from 'ng2-bootstrap';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AppSearchPageComponent } from "./search-page/components/search-page.component";
import { AppSearchPageService } from './search-page/shared/search-page.service';

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
    TooltipModule.forRoot(),
    DropdownModule.forRoot(),
  ],
  providers: [
    AppSearchPageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
