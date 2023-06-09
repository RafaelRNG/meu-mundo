package br.com.rng.backend.servicos;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.rng.backend.dtos.DetalheAlimentoDTO;
import br.com.rng.backend.dtos.RetornarDetalheAlimentoDTO;
import br.com.rng.backend.entidades.Alimento;
import br.com.rng.backend.entidades.DetalheAlimento;
import br.com.rng.backend.repositorios.AlimentoRepositorio;
import br.com.rng.backend.repositorios.DetalheAlimentoRepositorio;
import br.com.rng.backend.servicos.excecoes.NaoEncontrado;
import jakarta.persistence.EntityNotFoundException;

@Service
public class DetalheAlimentoServico {

   @Autowired
   private DetalheAlimentoRepositorio detalheAlimentoRepositorio;

   @Autowired
   private AlimentoRepositorio alimentoRepositorio;

   @Transactional(readOnly = true)
   public Page<RetornarDetalheAlimentoDTO> buscarDetalhes(Pageable paginacao) {

      Page<DetalheAlimento> alimentos = this.detalheAlimentoRepositorio.findAll(paginacao);
      Page<RetornarDetalheAlimentoDTO> alimentosDtos = alimentos
            .map(alimento -> new RetornarDetalheAlimentoDTO(alimento));

      return alimentosDtos;
   }

   public List<RetornarDetalheAlimentoDTO> buscarTodosSemPaginacao() {
      List<DetalheAlimento> detalhes = this.detalheAlimentoRepositorio.findAll(Sort.by(new Sort.Order(Sort.Direction.DESC, "codigo")));

      return detalhes.stream().map((detalhe) -> new RetornarDetalheAlimentoDTO(detalhe)).collect(Collectors.toList());
   }

   @Transactional(readOnly = true)
   public DetalheAlimento buscarUm(Long codigo) {
      Optional<DetalheAlimento> detalhe = this.detalheAlimentoRepositorio.findById(codigo);

      return detalhe.orElseThrow(() -> new NaoEncontrado("Detalhe do alimento não encontrado!"));
   }

   @Transactional
   public DetalheAlimentoDTO salvarDetalhe(DetalheAlimentoDTO detalheAlimentoDTO) {
      DetalheAlimento detalheAlimento = new DetalheAlimento();
      this.copiarDtoParaEntidade(detalheAlimentoDTO, detalheAlimento);

      detalheAlimento = this.detalheAlimentoRepositorio.save(detalheAlimento);

      return new DetalheAlimentoDTO(detalheAlimento.getCodigo());
   }

   @Transactional
   public void alterarDetalhe(Long codigo, DetalheAlimentoDTO detalheAlimentoDTO) {
      try {
         DetalheAlimento detalhe = this.detalheAlimentoRepositorio.getReferenceById(codigo);
         this.copiarDtoParaEntidade(detalheAlimentoDTO, detalhe);

         this.detalheAlimentoRepositorio.save(detalhe);

      } catch (EntityNotFoundException e) {
         throw new NaoEncontrado("Detalhe do alimento não encontrado!");
      }
   }

   @Transactional
   public void deletarDetalhe(Long codigo) {
      this.detalheAlimentoRepositorio.deleteById(codigo);
   }

   private void copiarDtoParaEntidade(DetalheAlimentoDTO detalheAlimentoDTO, DetalheAlimento detalheAlimento) {

      Alimento alimento = this.alimentoRepositorio.findById(detalheAlimentoDTO.getAlimento())
            .orElseThrow(() -> new NaoEncontrado("Objeto não encontrado"));

      detalheAlimento.setPesoBruto(detalheAlimentoDTO.getPesoBruto());
      detalheAlimento.setCarbo(detalheAlimentoDTO.getCarbo());
      detalheAlimento.setProteina(detalheAlimentoDTO.getProteina());
      detalheAlimento.setGordura(detalheAlimentoDTO.getGordura());
      detalheAlimento.setAlimento(alimento);

   }
}