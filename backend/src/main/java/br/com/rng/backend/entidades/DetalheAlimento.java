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
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "tb_detalhes_alimentos")
public class DetalheAlimento {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long codigo;

   @Column(name = "peso_bruto")
   private Double pesoBruto;
   private Double carbo;
   private Double proteina;
   private Double gordura;

   @JoinColumn(name = "codigo_alimento")
   @ManyToOne
   private Alimento alimento;

   @JsonIgnore
   @ManyToMany(mappedBy = "detalhes")
   private List<Refeicao> refeicaos = new ArrayList<>();
}