package br.com.rng.backend.dtos;

import br.com.rng.backend.entidades.DetalheAlimento;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class DetalheAlimentoDTO {

   private Long codigo;

   private Double pesoBruto;
   private Double carbo;
   private Double proteina;
   private Double gordura;
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