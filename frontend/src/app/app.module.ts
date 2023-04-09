//Importações do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importações de modulos
import { AppRoutingModule } from './app-routing.module';
import { CompartilhadosModule } from './compartilhados/compartilhados.module';

//Importações de componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './rotas/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartilhadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
