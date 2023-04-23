import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentacaoRoutingModule } from './alimentacao-routing.module';
import { CompartilhadosModule } from 'src/app/compartilhados/compartilhados.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { DetalheAlimentacaoComponent } from './detalhe-alimentacao/detalhe-alimentacao.component';
import { CriarPlanoAlimentarComponent } from './criar-plano-alimentar/criar-plano-alimentar.component';
import { AlimentacaoComponent } from './alimentacoes/alimentacao.component';
import { AlterarPlanoAlimentarComponent } from './alterar-plano-alimentar/alterar-plano-alimentar.component';

@NgModule({
  declarations: [
    AlimentacaoComponent,
    DetalheAlimentacaoComponent,
    CriarPlanoAlimentarComponent,
    AlterarPlanoAlimentarComponent,
  ],
  imports: [
    CommonModule,
    AlimentacaoRoutingModule,
    CompartilhadosModule,
    ComponentesModule
  ],
  exports: [
    AlimentacaoComponent
  ]
})
export class AlimentacaoModule { }
