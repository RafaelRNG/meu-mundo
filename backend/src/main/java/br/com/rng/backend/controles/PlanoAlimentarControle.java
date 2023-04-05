package br.com.rng.backend.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rng.backend.dtos.RetornarPlanoAlimentarDTO;
import br.com.rng.backend.servicos.PlanoAlimentarServico;

@RestController
@RequestMapping("/planos")
public class PlanoAlimentarControle {

   @Autowired
   private PlanoAlimentarServico planoAlimentarServico;

   @GetMapping
   public ResponseEntity<List<RetornarPlanoAlimentarDTO>> retornarPlanosAlimentares() {
      return ResponseEntity.ok(this.planoAlimentarServico.buscarPlanosAlimentares());
   }

   @GetMapping("/{codigo}")
   public ResponseEntity<RetornarPlanoAlimentarDTO> buscarUm(@PathVariable Long codigo) {

      return ResponseEntity.ok(this.planoAlimentarServico.buscarUm(codigo));
   }

   @DeleteMapping("/{codigo}")
   public ResponseEntity<?> deletar(@PathVariable Long codigo) {

      this.planoAlimentarServico.deletarPlanoAlimentar(codigo);

      return ResponseEntity.noContent().build();
   }
}