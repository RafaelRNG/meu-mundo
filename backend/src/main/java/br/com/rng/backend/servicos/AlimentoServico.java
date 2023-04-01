package br.com.rng.backend.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rng.backend.entidades.Alimento;
import br.com.rng.backend.repositorios.AlimentoRepositorio;

@Service
public class AlimentoServico {

   @Autowired
   private AlimentoRepositorio alimentoRepositorio;

   public Alimento buscarUm(Long codigo) {
      return this.alimentoRepositorio.findById(codigo).get();
   }
}