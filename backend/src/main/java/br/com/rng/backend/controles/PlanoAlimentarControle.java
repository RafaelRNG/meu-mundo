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

import br.com.rng.backend.dtos.PlanoAlimentarDTO;
import br.com.rng.backend.dtos.RetornarPlanoAlimentarDTO;
import br.com.rng.backend.eventos.ObjetoSalvoEvento;
import br.com.rng.backend.servicos.PlanoAlimentarServico;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/planos")
public class PlanoAlimentarControle {

   @Autowired
   private PlanoAlimentarServico planoAlimentarServico;

   @Autowired
   private ApplicationEventPublisher editorEvento;

   @GetMapping
   public ResponseEntity<List<RetornarPlanoAlimentarDTO>> retornarPlanosAlimentares() {
      return ResponseEntity.ok(this.planoAlimentarServico.buscarPlanosAlimentares());
   }

   @GetMapping("/{codigo}")
   public ResponseEntity<RetornarPlanoAlimentarDTO> buscarUm(@PathVariable Long codigo) {

      return ResponseEntity.ok(this.planoAlimentarServico.buscarUm(codigo));
   }

   @PostMapping
   public ResponseEntity<?> salvarPlanoAlimentar(@Valid @RequestBody PlanoAlimentarDTO planoAlimentarDTO,
         HttpServletResponse resposta) {

      PlanoAlimentarDTO planoDTO = this.planoAlimentarServico.salvarPlanoAlimentar(planoAlimentarDTO);

      Integer codigoHttp = HttpStatus.CREATED.value();
      this.editorEvento.publishEvent(new ObjetoSalvoEvento(this, resposta, planoDTO.getCodigo()));

      return ResponseEntity.status(codigoHttp).build();
   }

   @PutMapping("/{codigo}")
   public ResponseEntity<?> alterarPlanoAlimentar(@PathVariable Long codigo,
         @Valid @RequestBody PlanoAlimentarDTO planoAlimentarDTO) {
      this.planoAlimentarServico.alterarPlanoAlimentar(codigo, planoAlimentarDTO);

      return ResponseEntity.noContent().build();
   }

   @DeleteMapping("/{codigo}")
   public ResponseEntity<?> deletar(@PathVariable Long codigo) {

      this.planoAlimentarServico.deletarPlanoAlimentar(codigo);

      return ResponseEntity.noContent().build();
   }
}