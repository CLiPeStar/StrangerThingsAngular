import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {HistoriaComponent} from './historia/historia.component';
import {Temporada1Component} from './historia/temporada1/temporada1.component';
import {TemporadaDosComponent} from './historia/temporada2/temporada-dos.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'history', component: HistoriaComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
