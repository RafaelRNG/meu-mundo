import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RefeicaoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {

  private urlApi: string = 'http://localhost:3333/'

  constructor(private clienteHttp: HttpClient) { }

  public retornarRefeicoes(): Observable<RefeicaoDetalhe[]> {
    return this.clienteHttp.get<RefeicaoDetalhe[]>(`${this.urlApi}refeicoes`)
  }
}
