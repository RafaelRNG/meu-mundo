package br.com.rng.backend.servicos.excecoes;

public class NaoEncontrado extends RuntimeException {

   public NaoEncontrado(String mensagem) {
      super(mensagem);
   }
}