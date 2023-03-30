package br.com.rng.backend.repositorios;

import br.com.rng.backend.entidades.Alimentacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlimentacaoRepositorio extends JpaRepository<Alimentacao, Long> {
}