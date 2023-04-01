package br.com.rng.backend.controles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rng.backend.entidades.Refeicao;
import br.com.rng.backend.servicos.RefeicaoServico;

@RestController
@RequestMapping("/refeicoes")
public class RefeicaoControle {

   @Autowired
   private RefeicaoServico refeicaoServico;

   @GetMapping("/{codigo}")
   public ResponseEntity<Refeicao> buscarUm(@PathVariable Long codigo) {

      return ResponseEntity.ok(this.refeicaoServico.buscarUm(codigo));
   }
}