package br.com.rng.backend.dtos;

import java.util.ArrayList;
import java.util.List;

import br.com.rng.backend.entidades.Refeicao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class RetornarPlanoAlimentarDTO {

   private Long codigo;
   private String nome;
   private String descricao;

   private List<Refeicao> refeicoes = new ArrayList<>();
}