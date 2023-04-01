package br.com.rng.backend.controles.excecoes;

import java.util.ArrayList;
import java.util.List;

public class MensagemDeValidacao extends FormatoPadraoExcecao {

   List<CamposDeMensagem> erros = new ArrayList<>();

   public MensagemDeValidacao(Integer codigo, String mensagem) {
      super(codigo, mensagem);
   }

   public void adicionarErro(String campo, String mensagem) {
      this.erros.add(new CamposDeMensagem(campo, mensagem));
   }

   public List<CamposDeMensagem> getErros() {
      return this.erros;
   }
}