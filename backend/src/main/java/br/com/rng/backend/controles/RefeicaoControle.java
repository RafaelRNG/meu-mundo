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

import br.com.rng.backend.dtos.RefeicaoDTO;
import br.com.rng.backend.dtos.RetornarRefeicaoDTO;
import br.com.rng.backend.eventos.ObjetoSalvoEvento;
import br.com.rng.backend.servicos.RefeicaoServico;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/refeicoes")
public class RefeicaoControle {

   @Autowired
   private RefeicaoServico refeicaoServico;

   @Autowired
   private ApplicationEventPublisher editorEvento;

   @GetMapping
   public ResponseEntity<List<RetornarRefeicaoDTO>> buscarRefeicoes() {
      return ResponseEntity.ok(this.refeicaoServico.buscarRefeicoes());
   }

   @GetMapping("/{codigo}")
   public ResponseEntity<RetornarRefeicaoDTO> buscarUm(@PathVariable Long codigo) {

      return ResponseEntity.ok(this.refeicaoServico.buscarUm(codigo));
   }

   @PostMapping
   public ResponseEntity<?> salvartRefeicao(@Valid @RequestBody RefeicaoDTO refeicaoDTO, HttpServletResponse resposta) {

      RefeicaoDTO refeicao = this.refeicaoServico.salvarRefeicao(refeicaoDTO);
      Integer codigoHttp = HttpStatus.CREATED.value();
      this.editorEvento.publishEvent(new ObjetoSalvoEvento(refeicao, resposta, refeicao.getCodigo()));

      return ResponseEntity.status(codigoHttp).build();
   }

   @PutMapping("/{codigo}")
   public ResponseEntity<?> alterarRefeicao(@PathVariable Long codigo, @Valid @RequestBody RefeicaoDTO refeicaoDTO) {
      this.refeicaoServico.alterarRefeicao(codigo, refeicaoDTO);

      return ResponseEntity.noContent().build();
   }

   @DeleteMapping("/{codigo}")
   public ResponseEntity<?> deletarRefeicao(@PathVariable Long codigo) {
      this.refeicaoServico.deletarRefeicao(codigo);

      return ResponseEntity.noContent().build();
   }
}