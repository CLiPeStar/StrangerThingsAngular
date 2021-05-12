import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Temporada1Component} from './temporada1/temporada1.component';
import {TemporadaDosComponent} from './temporada2/temporada-dos.component';
import {Temporada3Component} from './temporada3/temporada3.component';
import {HistoriaComponent} from './historia/historia.component';

const routes: Routes = [
  {path: 'temp1', component: Temporada1Component},
  {path: 'temp2', component: TemporadaDosComponent},
  {path: 'temp3', component: Temporada3Component},
  {path: 'history', component: HistoriaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
