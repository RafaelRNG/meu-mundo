package br.com.rng.backend.dtos;

import br.com.rng.backend.entidades.DetalheAlimento;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class DetalheAlimentoDTO {

   private Long codigo;

   @NotNull(message = "Não é permitido valores nulos!")
   @Positive(message = "Não é permitido valores negativos!")
   private Double pesoBruto;

   @NotNull(message = "Não é permitido valores nulos!")
   @Positive(message = "Não é permitido valores negativos!")
   private Double carbo;

   @Positive(message = "Não é permitido valores negativos!")
   @NotNull(message = "Não é permitido valores nulos!")
   private Double proteina;
   private Double gordura;

   @NotNull(message = "Não é permitido valores nulos!")
   private Long alimento;

   public DetalheAlimentoDTO(DetalheAlimento detalheAlimento) {
      this.pesoBruto = detalheAlimento.getPesoBruto();
      this.carbo = detalheAlimento.getCarbo();
      this.proteina = detalheAlimento.getProteina();
      this.gordura = detalheAlimento.getGordura();
      this.alimento = detalheAlimento.getAlimento().getCodigo();
   }

   public DetalheAlimentoDTO(Long codigo) {
      this.codigo = codigo;
   }
}