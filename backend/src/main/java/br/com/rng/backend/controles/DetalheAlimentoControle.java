package br.com.rng.backend.controles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.rng.backend.dtos.DetalheAlimentoDTO;
import br.com.rng.backend.dtos.RetornarDetalheAlimentoDTO;
import br.com.rng.backend.entidades.DetalheAlimento;
import br.com.rng.backend.eventos.ObjetoSalvoEvento;
import br.com.rng.backend.servicos.DetalheAlimentoServico;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/detalhes")
public class DetalheAlimentoControle {

   @Autowired
   private DetalheAlimentoServico detalheAlimentoServico;

   @Autowired
   private ApplicationEventPublisher editorEvento;

   @GetMapping
   public ResponseEntity<Page<RetornarDetalheAlimentoDTO>> buscarDetalhes(Pageable paginacao) {
      return ResponseEntity.ok(this.detalheAlimentoServico.buscarDetalhes(paginacao));
   }

   @GetMapping("/{codigo}")
   public ResponseEntity<DetalheAlimento> buscarUm(@PathVariable Long codigo) {
      return ResponseEntity.ok(this.detalheAlimentoServico.buscarUm(codigo));
   }

   @PostMapping
   public ResponseEntity<?> salvavrDetalhe(@Valid @RequestBody DetalheAlimentoDTO detalheAlimentoDTO,
         HttpServletResponse resposta) {

      DetalheAlimentoDTO detalhe = this.detalheAlimentoServico.salvarDetalhe(detalheAlimentoDTO);
      Integer codigoHttp = HttpStatus.CREATED.value();
      this.editorEvento.publishEvent(new ObjetoSalvoEvento(this, resposta, detalhe.getCodigo()));

      return ResponseEntity.status(codigoHttp).build();
   }

   @PutMapping("/{codigo}")
   public ResponseEntity<?> alterarDetalhe(@PathVariable Long codigo,
         @Valid @RequestBody DetalheAlimentoDTO detalheAlimentoDTO) {

      this.detalheAlimentoServico.alterarDetalhe(codigo, detalheAlimentoDTO);

      return ResponseEntity.noContent().build();
   }

   @DeleteMapping("/{codigo}")
   public ResponseEntity<?> deletarDetalhe(@PathVariable Long codigo) {

      this.detalheAlimentoServico.deletarDetalhe(codigo);

      return ResponseEntity.noContent().build();
   }
}