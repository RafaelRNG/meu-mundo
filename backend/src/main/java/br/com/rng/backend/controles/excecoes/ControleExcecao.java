package br.com.rng.backend.controles.excecoes;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.com.rng.backend.servicos.excecoes.NaoEncontrado;

@ControllerAdvice
public class ControleExcecao {

   @ExceptionHandler(NaoEncontrado.class)
   public ResponseEntity<FormatoPadraoExcecao> naoEncontradoExcecao(NaoEncontrado naoEncontrado) {

      Integer codigoHttp = HttpStatus.NOT_FOUND.value();
      FormatoPadraoExcecao formato = new FormatoPadraoExcecao(codigoHttp, naoEncontrado.getMessage());

      return ResponseEntity.status(codigoHttp).body(formato);
   }
}