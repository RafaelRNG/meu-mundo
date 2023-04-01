package br.com.rng.backend.entidades;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_alimentos")
public class Alimento {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long codigo;
   private String nome;

   @JsonIgnore
   @OneToMany(mappedBy = "alimento")
   private List<DetalheAlimento> detalhes = new ArrayList<>();
}