//Importações do angular
import { NgModule } from '@angular/core';

//Importações do angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//Importações de modulos
import { ComponentesModule } from '../componentes/componentes.module';

//Importações componentes
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
    ComponentesModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ContainerComponent,
  ]
})
export class CompartilhadosModule { }
