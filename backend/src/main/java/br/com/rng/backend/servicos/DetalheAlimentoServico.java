package br.com.rng.backend.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rng.backend.entidades.DetalheAlimento;
import br.com.rng.backend.repositorios.DetalheAlimentoRepositorio;

@Service
public class DetalheAlimentoServico {

   @Autowired
   private DetalheAlimentoRepositorio detalheAlimentoRepositorio;

   public DetalheAlimento buscarUm(Long codigo) {
      return this.detalheAlimentoRepositorio.findById(codigo).get();
   
   }
}