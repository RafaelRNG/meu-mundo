package br.com.rng.backend.controles.excecoes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class CamposDeMensagem {

   private String campo;
   private String mensagem;
}