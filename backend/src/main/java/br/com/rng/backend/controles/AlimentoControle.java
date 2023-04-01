package br.com.rng.backend.controles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rng.backend.entidades.Alimento;
import br.com.rng.backend.servicos.AlimentoServico;

@RestController
@RequestMapping("/alimentos")
public class AlimentoControle {

   @Autowired
   private AlimentoServico alimentoServico;

   @GetMapping("/{codigo}")
   public ResponseEntity<Alimento> buscarUm(@PathVariable Long codigo) {
      return ResponseEntity.ok(this.alimentoServico.buscarUm(codigo));
   }
}