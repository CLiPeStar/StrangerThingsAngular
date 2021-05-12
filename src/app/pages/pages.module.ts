import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Temporada3Component} from './temporada3/temporada3.component';
import {TemporadaDosComponent} from './temporada2/temporada-dos.component';
import {Temporada1Component} from './temporada1/temporada1.component';
import {MainComponent} from './main/main.component';
import {HistoriaComponent} from './historia/historia.component';
import {ComponentesModule} from '../components/componentes.module';
import {PagesRoutingModule} from './pages-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [Temporada3Component, TemporadaDosComponent, Temporada1Component, MainComponent, HistoriaComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    ComponentesModule,
    PagesRoutingModule
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule {
}
