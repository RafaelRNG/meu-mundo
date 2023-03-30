package br.com.rng.backend.repositorios;

import br.com.rng.backend.entidades.PlanoAlimentar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanoAlimentarRepositorio extends JpaRepository<PlanoAlimentar, Long> {
}
