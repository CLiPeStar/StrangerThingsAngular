import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HistoriaComponent} from './historia/historia.component';
import {MainComponent} from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import {HistoriaRoutingModule} from './historia/historia-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HistoriaComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HistoriaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
