package br.com.rng.backend.ouvintes;

import java.net.URI;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.rng.backend.eventos.ObjetoSalvoEvento;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class ObjetoSalvoOuvinte implements ApplicationListener<ObjetoSalvoEvento> {

   @Override
   public void onApplicationEvent(ObjetoSalvoEvento objetoSalvo) {

      HttpServletResponse resposta = objetoSalvo.getResposta();
      Long codigo = objetoSalvo.getCodigo();

      AdicionarLocalizacaoDeCabecalho(resposta, codigo);
   }

   public static void AdicionarLocalizacaoDeCabecalho(HttpServletResponse resposta, Long codigo) {

      URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{codigo}").buildAndExpand(codigo).toUri();

      resposta.setHeader("Location", uri.toASCIIString());
   }
}