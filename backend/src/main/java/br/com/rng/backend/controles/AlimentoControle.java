package br.com.rng.backend.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.rng.backend.dtos.AlimentoDTO;
import br.com.rng.backend.eventos.ObjetoSalvoEvento;
import br.com.rng.backend.servicos.AlimentoServico;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/alimentos")
public class AlimentoControle {

   @Autowired
   private AlimentoServico alimentoServico;

   @Autowired
   private ApplicationEventPublisher editorEvento;

   @GetMapping
   public ResponseEntity<List<AlimentoDTO>> buscarAlimentos() {

      return ResponseEntity.ok(this.alimentoServico.buscarAlimentos());
   }

   @PostMapping
   public ResponseEntity<?> salvarAlimento(@Valid @RequestBody AlimentoDTO alimentoDTO, HttpServletResponse resposta) {

      AlimentoDTO alimento = this.alimentoServico.salvarAlimento(alimentoDTO);
      Integer codigoHttp = HttpStatus.CREATED.value();

      this.editorEvento.publishEvent(new ObjetoSalvoEvento(this, resposta, alimento.getCodigo()));

      return ResponseEntity.status(codigoHttp).build();
   }

   @PutMapping("/{codigo}")
   public ResponseEntity<?> alterarAlimento(@PathVariable Long codigo, @Valid @RequestBody AlimentoDTO alimentoDTO) {
      this.alimentoServico.alterarAlimento(codigo, alimentoDTO);

      return ResponseEntity.noContent().build();
   }

   @DeleteMapping("/{codigo}")
   public ResponseEntity<?> deletarAlimento(@PathVariable Long codigo) {
      this.alimentoServico.deletarAlimento(codigo);

      return ResponseEntity.noContent().build();
   }
}