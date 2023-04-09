import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanoAlimentar } from './alimentacao-tipos/PlanoAlimentar.tipo';

@Injectable({
  providedIn: 'root'
})
export class AlimentacaoService {

  private urlApi: string = 'http://localhost:3333/'

  constructor(private httpClient: HttpClient) { }

  public retornarPlanosAlimentares(): Observable<PlanoAlimentar[]> {
    return this.httpClient.get<PlanoAlimentar[]>(`${this.urlApi}planos`)
  }
}
