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

  public retornarDetalhesAlimentos(pagina: number = 0): Observable<any> {
    return this.clienteHttp.get(`${this.urlApi}detalhes?sort=alimento,asc&page=${pagina}`)
  }

  public salvarDetalhesAlimentos(detalheAlimento: DetalhesDoAlimento): Observable<DetalhesDoAlimento> {
    return this.clienteHttp.post<DetalhesDoAlimento>(`${this.urlApi}detalhes`, detalheAlimento)
  }

  public alterarDetalheAlimentos(codigo: number, detalheAlimento: DetalhesDoAlimento): Observable<DetalhesDoAlimento> {
    return this.clienteHttp.put<DetalhesDoAlimento>(`${this.urlApi}detalhes/${codigo}`, detalheAlimento)
  }
}
