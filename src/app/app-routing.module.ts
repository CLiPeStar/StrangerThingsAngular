import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {Temporada1Component} from './pages/temporada1/temporada1.component';
import {PagesRoutingModule} from './pages/pages-routing.module';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '**', pathMatch: 'full', component: MainComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
