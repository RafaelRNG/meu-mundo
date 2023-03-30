package br.com.rng.backend.servicos;

import br.com.rng.backend.entidades.PlanoAlimentar;
import br.com.rng.backend.repositorios.PlanoAlimentarRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlanoAlimentarServico {

    @Autowired
    private PlanoAlimentarRepositorio planoAlimentarRepositorio;

    public PlanoAlimentar buscarUm(Long codigo) {
        return this.planoAlimentarRepositorio.findById(codigo).get();
    }
}