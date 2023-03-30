package br.com.rng.backend.servicos;

import br.com.rng.backend.entidades.Alimentacao;
import br.com.rng.backend.repositorios.AlimentacaoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlimentacaoServico {

    @Autowired
    private AlimentacaoRepositorio alimentacaoRepositorio;

    public Alimentacao buscarUm(Long codigo) {
        return this.alimentacaoRepositorio.findById(codigo).get();
    }
}