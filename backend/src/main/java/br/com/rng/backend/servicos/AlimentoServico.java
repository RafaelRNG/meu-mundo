package br.com.rng.backend.servicos;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.rng.backend.dtos.AlimentoDTO;
import br.com.rng.backend.entidades.Alimento;
import br.com.rng.backend.repositorios.AlimentoRepositorio;

@Service
public class AlimentoServico {

   @Autowired
   private AlimentoRepositorio alimentoRepositorio;

   public List<AlimentoDTO> buscarAlimentos() {
      List<Alimento> alimentos = this.alimentoRepositorio.findAll();

      List<AlimentoDTO> alimentosDTOs = alimentos.stream().map(alimento -> new AlimentoDTO(alimento))
            .collect(Collectors.toList());

      return alimentosDTOs;
   }

   public AlimentoDTO salvarAlimento(AlimentoDTO alimentoDTO) {
      Alimento alimento = new Alimento();

      this.copiarDtoParaEntidade(alimentoDTO, alimento);

      alimento = this.alimentoRepositorio.save(alimento);
      return new AlimentoDTO(alimento);
   }

   public void alterarAlimento(Long codigo, AlimentoDTO alimentoDTO) {

      Alimento alimento = this.alimentoRepositorio.getReferenceById(codigo);

      this.copiarDtoParaEntidade(alimentoDTO, alimento);

      this.alimentoRepositorio.save(alimento);
   }

   public void copiarDtoParaEntidade(AlimentoDTO alimentoDTO, Alimento alimento) {
      alimento.setNome(alimentoDTO.getNome());
   }
}