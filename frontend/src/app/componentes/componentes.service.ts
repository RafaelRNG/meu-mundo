import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CompartilhadosService } from '../compartilhados/compartilhados.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  private urlApi: string = 'http://localhost:3333/'

  constructor(private clinteHttp: HttpClient, private compartilhadosServico: CompartilhadosService) { }

  public excluirItem(rota: string, codigo: number, mensagemSucesso: string, mensagemErro: string): Observable<any> {
    return this.clinteHttp.delete<any>(`${this.urlApi}${rota}/${codigo}`)
      .pipe(tap({
        next: () => {
          this.compartilhadosServico.ativarSnackBar(mensagemSucesso, 'mensagem-sucesso')
        },
        error: () => {
          this.compartilhadosServico.ativarSnackBar(mensagemErro, 'mensagem-erro')
        }
      }))
  }
}
