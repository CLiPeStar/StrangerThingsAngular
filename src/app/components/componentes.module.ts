import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderTempComponent} from './header-temp/header-temp.component';
import {ComponentesRoutingModule} from './componentes-routing.module';


@NgModule({
  declarations: [HeaderTempComponent],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ],
  exports: [HeaderTempComponent,
  ]
})
export class ComponentesModule {
}
