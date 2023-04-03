package br.com.rng.backend.eventos;

import org.springframework.context.ApplicationEvent;

import jakarta.servlet.http.HttpServletResponse;

public class ObjetoSalvoEvento extends ApplicationEvent {

   private HttpServletResponse resposta;
   private Long codigo;

   public ObjetoSalvoEvento(Object objeto, HttpServletResponse resposta, Long codigo) {
      super(objeto);
      this.resposta = resposta;
      this.codigo = codigo;
   }

   public HttpServletResponse getResposta() {
      return resposta;
   }

   public Long getCodigo() {
      return codigo;
   }

}