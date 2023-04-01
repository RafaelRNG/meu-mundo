package br.com.rng.backend.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.rng.backend.dtos.AlimentoDTO;
import br.com.rng.backend.entidades.Alimento;
import br.com.rng.backend.servicos.AlimentoServico;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/alimentos")
public class AlimentoControle {

   @Autowired
   private AlimentoServico alimentoServico;

   @GetMapping
   public ResponseEntity<List<AlimentoDTO>> buscarAlimentos() {

      return ResponseEntity.ok(this.alimentoServico.buscarAlimentos());
   }

   @PostMapping
   public ResponseEntity<?> salvarAlimento(@Valid @RequestBody AlimentoDTO alimentoDTO) {

      AlimentoDTO alimento = this.alimentoServico.salvarAlimento(alimentoDTO);

      return ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest().path("/{codigo}")
            .buildAndExpand(alimento.getCodigo()).toUri()).build();
   }
}