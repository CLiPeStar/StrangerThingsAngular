import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {ComponentesModule} from './components/componentes.module';
import {PagesRoutingModule} from './pages/pages-routing.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentesModule,
    PagesRoutingModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
