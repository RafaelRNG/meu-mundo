package br.com.rng.backend.servicos;

import br.com.rng.backend.dtos.RetornarRefeicaoDTO;
import br.com.rng.backend.entidades.Refeicao;
import br.com.rng.backend.repositorios.RefeicaoRepositorio;
import br.com.rng.backend.servicos.excecoes.NaoEncontrado;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RefeicaoServico {

    @Autowired
    private RefeicaoRepositorio refeicaoRepositorio;

    public List<RetornarRefeicaoDTO> buscarRefeicoes() {
        List<Refeicao> refeicoes = this.refeicaoRepositorio.findAll();

        return refeicoes.stream().map(refeicao -> new RetornarRefeicaoDTO(refeicao)).collect(Collectors.toList());
    }

    public RetornarRefeicaoDTO buscarUm(Long codigo) {
        Refeicao refeicao = this.refeicaoRepositorio.findById(codigo)
                .orElseThrow(() -> new NaoEncontrado("Refeição não encontrada!!"));

        return new RetornarRefeicaoDTO(refeicao);
    }

    public void deletarRefeicao(Long codigo) {
        this.refeicaoRepositorio.deleteById(codigo);
    }
}