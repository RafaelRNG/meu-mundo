package br.com.rng.backend.dtos;

import br.com.rng.backend.entidades.Refeicao;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
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

   @NotNull(message = "Não é permitido nome nulo!")
   @NotEmpty(message = "Não é permitido nome vazio!")
   private String nome;
   private String descricao;

   @NotNull(message = "Não é permitido valor nulo!")
   @Positive(message = "Não é permitido valor negativo!")
   private Double minimoCarbo;

   @NotNull(message = "Não é permitido valor nulo!")
   @Positive(message = "Não é permitido valor negativo!")
   private Double minimoProteina;
   private Double minimoGordura;

   @NotNull(message = "Não é permitido horario nulo!")
   @NotEmpty(message = "Não é permitido horario vazio!")
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