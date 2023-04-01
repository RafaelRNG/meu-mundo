package br.com.rng.backend.servicos;

import br.com.rng.backend.entidades.Refeicao;
import br.com.rng.backend.repositorios.RefeicaoRepositorio;
import br.com.rng.backend.servicos.excecoes.NaoEncontrado;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RefeicaoServico {

    @Autowired
    private RefeicaoRepositorio refeicaoRepositorio;

    public Refeicao buscarUm(Long codigo) {
        Optional<Refeicao> refeicao = this.refeicaoRepositorio.findById(codigo);

        return refeicao.orElseThrow(() -> new NaoEncontrado("Refeição não encontrada!!"));
    }
}