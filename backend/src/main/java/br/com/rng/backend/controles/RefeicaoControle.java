package br.com.rng.backend.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rng.backend.dtos.RetornarRefeicaoDTO;
import br.com.rng.backend.servicos.RefeicaoServico;

@RestController
@RequestMapping("/refeicoes")
public class RefeicaoControle {

   @Autowired
   private RefeicaoServico refeicaoServico;

   @GetMapping
   public ResponseEntity<List<RetornarRefeicaoDTO>> buscarRefeicoes() {
      return ResponseEntity.ok(this.refeicaoServico.buscarRefeicoes());
   }

   @GetMapping("/{codigo}")
   public ResponseEntity<RetornarRefeicaoDTO> buscarUm(@PathVariable Long codigo) {

      return ResponseEntity.ok(this.refeicaoServico.buscarUm(codigo));
   }

   @DeleteMapping("/{codigo}")
   public ResponseEntity<?> deletarRefeicao(@PathVariable Long codigo) {
      this.refeicaoServico.deletarRefeicao(codigo);

      return ResponseEntity.noContent().build();
   }
}