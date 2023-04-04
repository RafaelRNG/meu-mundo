package br.com.rng.backend.servicos;

import br.com.rng.backend.dtos.RetornarPlanoAlimentarDTO;
import br.com.rng.backend.entidades.PlanoAlimentar;
import br.com.rng.backend.repositorios.PlanoAlimentarRepositorio;
import br.com.rng.backend.servicos.excecoes.NaoEncontrado;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlanoAlimentarServico {

    @Autowired
    private PlanoAlimentarRepositorio planoAlimentarRepositorio;

    public PlanoAlimentar buscarUm(Long codigo) {
        Optional<PlanoAlimentar> plano = this.planoAlimentarRepositorio.findById(codigo);

        return plano.orElseThrow(() -> new NaoEncontrado("Plano alimentar não encontrado!"));
    }
}