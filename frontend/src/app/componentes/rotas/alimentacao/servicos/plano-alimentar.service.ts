import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanoAlimentar } from 'src/app/tipos/PlanoAlimentar.tipo';

@Injectable({
  providedIn: 'root'
})
export class PlanoAlimentarService {

  private urlApi: string = 'http://localhost:3333/'

  constructor(private clienteHttp: HttpClient) { }

  public retornarPlanosAlimentares(): Observable<PlanoAlimentar[]> {
    return this.clienteHttp.get<PlanoAlimentar[]>(`${this.urlApi}planos`)
  }

  public retornarPlanoAlimentar(codigo: number): Observable<PlanoAlimentar> {
    return this.clienteHttp.get<PlanoAlimentar>(`${this.urlApi}planos/${codigo}`)
  }

  public salvarPlanoAlimentar(corpo: PlanoAlimentar): Observable<PlanoAlimentar> {
    return this.clienteHttp.post<PlanoAlimentar>(`${this.urlApi}planos`, corpo)
  }
}
