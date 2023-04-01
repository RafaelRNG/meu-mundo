package br.com.rng.backend.controles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rng.backend.entidades.DetalheAlimento;
import br.com.rng.backend.servicos.DetalheAlimentoServico;

@RestController
@RequestMapping("/detalhes")
public class DetalheAlimentoControle {

   @Autowired
   private DetalheAlimentoServico detalheAlimentoServico;

   @GetMapping("/{codigo}")
   public ResponseEntity<DetalheAlimento> buscarUm(@PathVariable Long codigo) {
      return ResponseEntity.ok(this.detalheAlimentoServico.buscarUm(codigo));
   }
}