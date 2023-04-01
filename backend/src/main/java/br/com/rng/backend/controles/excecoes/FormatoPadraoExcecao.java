package br.com.rng.backend.controles.excecoes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class FormatoPadraoExcecao {

   private Integer code;
   private String mensagem;
}