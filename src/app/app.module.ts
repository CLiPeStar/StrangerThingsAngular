import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HistoriaComponent} from './historia/historia.component';
import {MainComponent} from './main/main.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: '', component: MainComponent},
  {path: 'history', component: HistoriaComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HistoriaComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
