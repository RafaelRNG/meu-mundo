package br.com.rng.backend.controles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rng.backend.entidades.PlanoAlimentar;
import br.com.rng.backend.servicos.PlanoAlimentarServico;

@RestController
@RequestMapping("/planos")
public class PlanoAlimentarControle {

   @Autowired
   private PlanoAlimentarServico planoAlimentarServico;

   @GetMapping("/{codigo}")
   public ResponseEntity<PlanoAlimentar> buscarUm(@PathVariable Long codigo) {
      return ResponseEntity.ok(this.planoAlimentarServico.buscarUm(codigo));
   }
}