package br.com.rng.backend.entidades;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "tb_planos_alimentares")
public class PlanoAlimentar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @ManyToMany(mappedBy = "planos")
    private List<Refeicao> alimentacoes = new ArrayList<>();
}