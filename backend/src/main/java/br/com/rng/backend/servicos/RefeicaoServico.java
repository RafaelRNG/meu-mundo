package br.com.rng.backend.servicos;

import br.com.rng.backend.dtos.RefeicaoDTO;
import br.com.rng.backend.dtos.RetornarRefeicaoDTO;
import br.com.rng.backend.entidades.Refeicao;
import br.com.rng.backend.repositorios.RefeicaoRepositorio;
import br.com.rng.backend.servicos.excecoes.NaoEncontrado;
import jakarta.persistence.EntityNotFoundException;

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

    public RefeicaoDTO salvarRefeicao(RefeicaoDTO refeicaoDTO) {
        Refeicao refeicao = new Refeicao();

        this.copiarDtoParaEntidade(refeicaoDTO, refeicao);
        refeicao = this.refeicaoRepositorio.save(refeicao);

        return new RefeicaoDTO(refeicao);
    }

    public void alterarRefeicao(Long codigo, RefeicaoDTO refeicaoDTO) {
        try {
            Refeicao refeicao = this.refeicaoRepositorio.getReferenceById(codigo);

            this.copiarDtoParaEntidade(refeicaoDTO, refeicao);
            this.refeicaoRepositorio.save(refeicao);
        } catch (EntityNotFoundException e) {
            throw new NaoEncontrado("Refeição não encontrado");
        }
    }

    public void deletarRefeicao(Long codigo) {
        this.refeicaoRepositorio.deleteById(codigo);
    }

    public void copiarDtoParaEntidade(RefeicaoDTO refeicaoDTO, Refeicao refeicao) {
        refeicao.setNome(refeicaoDTO.getNome());
        refeicao.setDescricao(refeicaoDTO.getDescricao());
        refeicao.setMinimoCarbo(refeicaoDTO.getMinimoCarbo());
        refeicao.setMinimoProteina(refeicaoDTO.getMinimoProteina());
        refeicao.setMinimoGordura(refeicaoDTO.getMinimoGordura());
        refeicao.setHorario(refeicaoDTO.getHorario());
    }
}