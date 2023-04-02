package br.com.rng.backend.entidades;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "tb_detalhes_alimentos")
public class DetalheAlimento {

   @Getter
   @Setter
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long codigo;

   @Getter
   @Setter
   @Column(name = "peso_bruto")
   private Double pesoBruto;

   @Getter
   @Setter
   private Double carbo;

   @Getter
   @Setter
   private Double proteina;

   @Getter
   @Setter
   private Double gordura;

   @Getter
   @Setter
   @JoinColumn(name = "codigo_alimento")
   @ManyToOne
   private Alimento alimento;

   @JsonIgnore
   @ManyToMany(mappedBy = "detalhes")
   private List<Refeicao> refeicaos = new ArrayList<>();

   public DetalheAlimento(Long codigo, Double pesoBruto, Double carbo, Double proteina, Double gordura,
         Alimento alimento) {
      this.codigo = codigo;
      this.pesoBruto = pesoBruto;
      this.carbo = carbo;
      this.proteina = proteina;
      this.gordura = gordura;
      this.alimento = alimento;
   }
}