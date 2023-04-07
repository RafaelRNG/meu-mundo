package br.com.rng.backend.servicos;

import br.com.rng.backend.dtos.PlanoAlimentarDTO;
import br.com.rng.backend.dtos.RetornarPlanoAlimentarDTO;
import br.com.rng.backend.entidades.PlanoAlimentar;
import br.com.rng.backend.repositorios.PlanoAlimentarRepositorio;
import br.com.rng.backend.servicos.excecoes.NaoEncontrado;
import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PlanoAlimentarServico {

    @Autowired
    private PlanoAlimentarRepositorio planoAlimentarRepositorio;

    @Transactional(readOnly = true)
    public List<RetornarPlanoAlimentarDTO> buscarPlanosAlimentares() {
        List<PlanoAlimentar> planosAlimentares = this.planoAlimentarRepositorio.retornarPorOrdemDecrescente();
        List<RetornarPlanoAlimentarDTO> planosAlimentaresDtos = planosAlimentares.stream()
                .map(plano -> new RetornarPlanoAlimentarDTO(plano)).collect(Collectors.toList());

        return planosAlimentaresDtos;
    }

    @Transactional(readOnly = true)
    public RetornarPlanoAlimentarDTO buscarUm(Long codigo) {
        PlanoAlimentar plano = this.planoAlimentarRepositorio.findById(codigo)
                .orElseThrow(() -> new NaoEncontrado("Plano alimentar não encontrado"));
        RetornarPlanoAlimentarDTO planoAlimentarDto = new RetornarPlanoAlimentarDTO(plano);

        return planoAlimentarDto;
    }

    @Transactional
    public PlanoAlimentarDTO salvarPlanoAlimentar(PlanoAlimentarDTO planoAlimentarDTO) {
        PlanoAlimentar planoAlimentar = new PlanoAlimentar();
        this.copiarDtoParaEntidade(planoAlimentarDTO, planoAlimentar);
        planoAlimentar = this.planoAlimentarRepositorio.save(planoAlimentar);

        return new PlanoAlimentarDTO(planoAlimentar);
    }

    @Transactional
    public void alterarPlanoAlimentar(Long codigo, PlanoAlimentarDTO planoAlimentarDTO) {
        try {
            PlanoAlimentar plano = this.planoAlimentarRepositorio.getReferenceById(codigo);

            this.copiarDtoParaEntidade(planoAlimentarDTO, plano);
            this.planoAlimentarRepositorio.save(plano);
        } catch (EntityNotFoundException e) {
            throw new NaoEncontrado("Plano alimentar não encontrado!!");
        }
    }

    @Transactional
    public void deletarPlanoAlimentar(Long codigo) {
        this.planoAlimentarRepositorio.deleteById(codigo);
    }

    private void copiarDtoParaEntidade(PlanoAlimentarDTO planoAlimentarDTO, PlanoAlimentar planoAlimentar) {
        planoAlimentar.setNome(planoAlimentarDTO.getNome());
        planoAlimentar.setDescricao(planoAlimentarDTO.getDescricao());
    }
}