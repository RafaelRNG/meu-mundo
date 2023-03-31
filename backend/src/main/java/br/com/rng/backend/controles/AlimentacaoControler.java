package br.com.rng.backend.controles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rng.backend.entidades.Alimentacao;
import br.com.rng.backend.servicos.AlimentacaoServico;

@RestController
@RequestMapping("/alimentacoes")
public class AlimentacaoControler {

   @Autowired
   private AlimentacaoServico alimentacaoServico;

   @GetMapping("/{codigo}")
   public ResponseEntity<Alimentacao> buscarUm(@PathVariable Long codigo) {

      return ResponseEntity.ok(this.alimentacaoServico.buscarUm(codigo));
   }
}