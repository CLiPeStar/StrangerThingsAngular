import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HistoriaRoutingModule} from './historia-routing.module';
import {Temporada1Component} from './temporada1/temporada1.component';
import {TemporadaDosComponent} from './temporada2/temporada-dos.component';


@NgModule({
  declarations: [Temporada1Component, TemporadaDosComponent],
  imports: [
    CommonModule,
    HistoriaRoutingModule
  ],
  providers: []
})
export class HistoriaModule {
}
