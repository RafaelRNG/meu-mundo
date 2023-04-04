package br.com.rng.backend.repositorios;

import br.com.rng.backend.entidades.PlanoAlimentar;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanoAlimentarRepositorio extends JpaRepository<PlanoAlimentar, Long> {

   @Query(value = "SELECT * FROM tb_planos_alimentares ORDER BY codigo DESC", nativeQuery = true)
   List<PlanoAlimentar> retornarPorOrdemDecrescente();
}