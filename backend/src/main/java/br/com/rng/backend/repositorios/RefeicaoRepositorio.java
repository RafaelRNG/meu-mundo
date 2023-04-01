package br.com.rng.backend.repositorios;

import br.com.rng.backend.entidades.Refeicao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefeicaoRepositorio extends JpaRepository<Refeicao, Long> {
}