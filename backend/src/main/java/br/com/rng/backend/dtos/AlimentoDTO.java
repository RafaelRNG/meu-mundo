package br.com.rng.backend.dtos;

import org.hibernate.validator.constraints.Length;

import br.com.rng.backend.entidades.Alimento;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AlimentoDTO {

   private Long codigo;

   @NotBlank(message = "Nome do alimento não pode ser vazio")
   @Length(message = "O alimento deve ter entre 5 e 200 caracteres!!", min = 5, max = 200)
   private String nome;

   public AlimentoDTO(Alimento alimento) {
      this.codigo = alimento.getCodigo();
      this.nome = alimento.getNome();
   }
}