//Importações do angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importações do angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//Importações de modulos
import { ComponentesModule } from '../componentes/componentes.module';

//Importações componentes
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class CompartilhadosModule { }
