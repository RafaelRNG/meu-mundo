package br.com.rng.backend.servicos;

import br.com.rng.backend.entidades.Refeicao;
import br.com.rng.backend.repositorios.RefeicaoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RefeicaoServico {

    @Autowired
    private RefeicaoRepositorio refeicaoRepositorio;

    public Refeicao buscarUm(Long codigo) {
        return this.refeicaoRepositorio.findById(codigo).get();
    }
}