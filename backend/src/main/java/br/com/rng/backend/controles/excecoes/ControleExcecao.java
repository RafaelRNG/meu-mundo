package br.com.rng.backend.controles.excecoes;

import org.springframework.dao.DataIntegrityViolationException;
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

   Integer codigoHttp = HttpStatus.BAD_REQUEST.value();

   @ExceptionHandler(NaoEncontrado.class)
   public ResponseEntity<FormatoPadraoExcecao> naoEncontradoExcecao(NaoEncontrado naoEncontrado) {

      Integer codigoHttp = HttpStatus.NOT_FOUND.value();
      FormatoPadraoExcecao formato = new FormatoPadraoExcecao(codigoHttp, naoEncontrado.getMessage());

      return ResponseEntity.status(codigoHttp).body(formato);
   }

   @ExceptionHandler(MethodArgumentNotValidException.class)
   public ResponseEntity<MensagemDeValidacao> erroValidacao(MethodArgumentNotValidException naoValido) {

      MensagemDeValidacao validacao = new MensagemDeValidacao(this.codigoHttp, "Erro nos campos de validação!");

      for (FieldError camposDeErro : naoValido.getFieldErrors()) {
         validacao.adicionarErro(camposDeErro.getField(), camposDeErro.getDefaultMessage());
      }

      return ResponseEntity.status(this.codigoHttp).body(validacao);
   }

   @ExceptionHandler(PropertyReferenceException.class)
   public ResponseEntity<FormatoPadraoExcecao> referenciaDePropriedade() {

      FormatoPadraoExcecao formato = new FormatoPadraoExcecao(this.codigoHttp, "Erro na formatação de pesquisa!!");
      return ResponseEntity.status(this.codigoHttp).body(formato);
   }

   @ExceptionHandler(DataIntegrityViolationException.class)
   public ResponseEntity<FormatoPadraoExcecao> violacaoDeIntegridade() {

      FormatoPadraoExcecao formato = new FormatoPadraoExcecao(this.codigoHttp,
            "Erro na tentativa de excluir um objeto que possui relacionamento ou referenciar um objeto que não existe!");

      return ResponseEntity.status(this.codigoHttp).body(formato);
   }
}