//Importações do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importações de modulos
import { AppRoutingModule } from './app-routing.module';
import { ComponentesModule } from './componentes/componentes.module';

//Importações de componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
