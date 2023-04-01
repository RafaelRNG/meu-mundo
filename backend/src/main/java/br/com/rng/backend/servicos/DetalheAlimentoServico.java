package br.com.rng.backend.servicos;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rng.backend.entidades.DetalheAlimento;
import br.com.rng.backend.repositorios.DetalheAlimentoRepositorio;
import br.com.rng.backend.servicos.excecoes.NaoEncontrado;

@Service
public class DetalheAlimentoServico {

   @Autowired
   private DetalheAlimentoRepositorio detalheAlimentoRepositorio;

   public DetalheAlimento buscarUm(Long codigo) {
      Optional<DetalheAlimento> detalhe = this.detalheAlimentoRepositorio.findById(codigo);

      return detalhe.orElseThrow(() -> new NaoEncontrado("Detalhe do alimento não encontrado!"));
   }
}