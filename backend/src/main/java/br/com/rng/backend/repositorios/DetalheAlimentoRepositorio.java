package br.com.rng.backend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.rng.backend.entidades.DetalheAlimento;

@Repository
public interface DetalheAlimentoRepositorio extends JpaRepository<DetalheAlimento, Long> {
}