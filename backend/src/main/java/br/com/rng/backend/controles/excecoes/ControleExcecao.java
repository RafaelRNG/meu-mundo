package br.com.rng.backend.controles.excecoes;

import org.springframework.data.mapping.PropertyReferenceException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

   @ExceptionHandler(MethodArgumentNotValidException.class)
   public ResponseEntity<MensagemDeValidacao> erroValidacao(MethodArgumentNotValidException notValid) {

      Integer codigoHttp = HttpStatus.BAD_REQUEST.value();

      MensagemDeValidacao validacao = new MensagemDeValidacao(codigoHttp, "Erro nos campos de validação!");

      for (FieldError camposDeErro : notValid.getFieldErrors()) {
         validacao.adicionarErro(camposDeErro.getField(), camposDeErro.getDefaultMessage());
      }

      return ResponseEntity.status(codigoHttp).body(validacao);
   }

   @ExceptionHandler(PropertyReferenceException.class)
   public ResponseEntity<FormatoPadraoExcecao> referenciaDePropriedade() {

      Integer codigoHttp = HttpStatus.BAD_REQUEST.value();

      FormatoPadraoExcecao formato = new FormatoPadraoExcecao(codigoHttp, "Erro na formatação de pesquisa!!");
      return ResponseEntity.status(codigoHttp).body(formato);
   }
}