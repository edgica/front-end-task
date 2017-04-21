import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {GitHubSearchService} from './services/git-hub-search.service';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import 'rxjs/add/operator/map';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitHubSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
