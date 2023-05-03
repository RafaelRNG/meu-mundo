import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalhesDoAlimento } from 'src/app/tipos/PlanoAlimentar.tipo';

@Injectable({
  providedIn: 'root'
})
export class DetalheAlimentoService {

  private urlApi: string = 'http://localhost:3333/'

  constructor(private clienteHttp: HttpClient) { }

  public salvarPlanoAlimentar(detalheAlimento: DetalhesDoAlimento): Observable<DetalhesDoAlimento> {
    return this.clienteHttp.post<DetalhesDoAlimento>(`${this.urlApi}detalhes`, detalheAlimento)
  }
}
