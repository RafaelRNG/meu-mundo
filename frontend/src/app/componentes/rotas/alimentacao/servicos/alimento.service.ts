import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlimentoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  private urlApi: string = 'http://localhost:3333/'

  constructor(private clienteHttp: HttpClient) { }

  public retornarAlimentos(): Observable<AlimentoDetalhe[]> {
    return this.clienteHttp.get<AlimentoDetalhe[]>(`${this.urlApi}alimentos`)
  }

  public salvarAlimento(corpo: AlimentoDetalhe): Observable<AlimentoDetalhe> {
    return this.clienteHttp.post<AlimentoDetalhe>(`${this.urlApi}alimentos`, corpo)
  }

  public alterarAlimento(codigo: number, corpo: AlimentoDetalhe): Observable<AlimentoDetalhe> {
    return this.clienteHttp.put<AlimentoDetalhe>(`${this.urlApi}alimentos/${codigo}`, corpo)
  }
}
