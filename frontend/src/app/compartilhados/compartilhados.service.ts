import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CompartilhadosService {

  constructor(private bar: MatSnackBar) { }

  public ativarSnackBar(mensagem: string, ...classe: string[]): void {

    this.bar.open(mensagem, 'X', {
      panelClass: [...classe],
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
