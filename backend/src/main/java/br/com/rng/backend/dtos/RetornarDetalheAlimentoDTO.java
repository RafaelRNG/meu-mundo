package br.com.rng.backend.dtos;

import br.com.rng.backend.entidades.Alimento;
import br.com.rng.backend.entidades.DetalheAlimento;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class RetornarDetalheAlimentoDTO {
   private Long codigo;
   private Double pesoBruto;
   private Double carbo;
   private Double proteina;
   private Double gordura;
   private Alimento alimento;

   public RetornarDetalheAlimentoDTO(DetalheAlimento detalheAlimento) {
      this.codigo = detalheAlimento.getCodigo();
      this.pesoBruto = detalheAlimento.getPesoBruto();
      this.carbo = detalheAlimento.getCarbo();
      this.proteina = detalheAlimento.getProteina();
      this.gordura = detalheAlimento.getGordura();
      this.alimento = detalheAlimento.getAlimento();
   }
}
