package br.com.rng.backend.servicos;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rng.backend.entidades.Alimento;
import br.com.rng.backend.repositorios.AlimentoRepositorio;
import br.com.rng.backend.servicos.excecoes.NaoEncontrado;

@Service
public class AlimentoServico {

   @Autowired
   private AlimentoRepositorio alimentoRepositorio;

   public Alimento buscarUm(Long codigo) {
      Optional<Alimento> alimento = this.alimentoRepositorio.findById(codigo);

      return alimento.orElseThrow(() -> new NaoEncontrado("Alimento não encontrado!!"));
   }
}