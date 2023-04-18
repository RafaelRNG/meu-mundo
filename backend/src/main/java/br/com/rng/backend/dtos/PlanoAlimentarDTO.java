package br.com.rng.backend.dtos;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.validator.constraints.Length;

import br.com.rng.backend.entidades.PlanoAlimentar;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class PlanoAlimentarDTO {

   private Long codigo;

   @NotNull(message = "Não é permitido valores nulos!")
   @NotEmpty(message = "Não é permitido valores vazios!")
   @Length(min = 0, max = 30, message = "Valor máximo de 30 caracteres!")
   private String nome;
   private String descricao;

   @NotNull(message = "Refeições não pode está nula!")
   @Size(min = 1, message = "É preciso ter pelo menos uma refeição!")
   private List<Long> refeicoes = new ArrayList<>();

   public PlanoAlimentarDTO(PlanoAlimentar planoAlimentar) {
      this.codigo = planoAlimentar.getCodigo();
      this.nome = planoAlimentar.getNome();
      this.descricao = planoAlimentar.getDescricao();
   }
}