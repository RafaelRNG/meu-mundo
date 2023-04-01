package br.com.rng.backend.entidades;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "tb_refeicoes")
public class Refeicao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String nome;
    private String descricao;

    @Column(name = "minimo_carbo")
    private Double minimoCarbo;

    @Column(name = "minimo_proteina")
    private Double minimoProteina;

    @Column(name = "minimo_gordura")
    private Double minimoGordura;
    private String horario;

    @ManyToMany
    @JoinTable(name = "tb_alimentacoes_planos", joinColumns = @JoinColumn(name = "alimentacao_codigo"), inverseJoinColumns = @JoinColumn(name = "plano_codigo"))
    @JsonIgnore
    private List<PlanoAlimentar> planos = new ArrayList<>();
}