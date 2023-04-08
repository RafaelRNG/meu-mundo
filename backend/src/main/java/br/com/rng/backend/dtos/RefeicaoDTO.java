package br.com.rng.backend.dtos;

import br.com.rng.backend.entidades.Refeicao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RefeicaoDTO {

   private Long codigo;
   private String nome;
   private String descricao;
   private Double minimoCarbo;
   private Double minimoProteina;
   private Double minimoGordura;
   private String horario;

   public RefeicaoDTO(Refeicao refeicao) {
      this.codigo = refeicao.getCodigo();
      this.nome = refeicao.getNome();
      this.descricao = refeicao.getDescricao();
      this.minimoCarbo = refeicao.getMinimoCarbo();
      this.minimoProteina = refeicao.getMinimoProteina();
      this.minimoGordura = refeicao.getMinimoGordura();
      this.horario = refeicao.getHorario();
   }
}