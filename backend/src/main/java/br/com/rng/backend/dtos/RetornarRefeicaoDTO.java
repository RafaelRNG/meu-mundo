package br.com.rng.backend.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import br.com.rng.backend.entidades.Refeicao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class RetornarRefeicaoDTO {

   private Long codigo;
   private String nome;
   private String descricao;
   private Double minimoCarbo;
   private Double minimoProteina;
   private Double minimoGordura;
   private String horario;

   private List<RetornarDetalheAlimentoDTO> detalhes = new ArrayList<>();

   public RetornarRefeicaoDTO(Refeicao refeicao) {
      this.codigo = refeicao.getCodigo();
      this.nome = refeicao.getNome();
      this.descricao = refeicao.getDescricao();
      this.minimoCarbo = refeicao.getMinimoCarbo();
      this.minimoProteina = refeicao.getMinimoProteina();
      this.minimoGordura = refeicao.getMinimoGordura();
      this.horario = refeicao.getHorario();

      this.detalhes = refeicao.getDetalhes().stream().map(detalhe -> new RetornarDetalheAlimentoDTO(detalhe))
            .collect(Collectors.toList());
   }
}