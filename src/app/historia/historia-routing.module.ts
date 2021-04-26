import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Temporada1Component} from './temporada1/temporada1.component';
import {TemporadaDosComponent} from './temporada2/temporada-dos.component';

const routes: Routes = [{path: 'temp1', component: Temporada1Component},
  {path: 'temp2', component: TemporadaDosComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriaRoutingModule { }
