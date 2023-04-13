CREATE TABLE IF NOT EXISTS tb_refeicoes_detalhes(
   refeicao_codigo BIGINT NOT NULL,
   detalhe_codigo BIGINT NOT NULL,

   FOREIGN KEY (refeicao_codigo) REFERENCES tb_refeicoes(codigo),
   FOREIGN KEY (detalhe_codigo) REFERENCES tb_detalhes_alimentos(codigo),

   PRIMARY KEY(refeicao_codigo, detalhe_codigo)
);

INSERT INTO tb_refeicoes_detalhes(refeicao_codigo, detalhe_codigo) VALUES(1, 1);
INSERT INTO tb_refeicoes_detalhes(refeicao_codigo, detalhe_codigo) VALUES(1, 2);
INSERT INTO tb_refeicoes_detalhes(refeicao_codigo, detalhe_codigo) VALUES(1, 3);

INSERT INTO tb_refeicoes_detalhes(refeicao_codigo, detalhe_codigo) VALUES(2, 1);
INSERT INTO tb_refeicoes_detalhes(refeicao_codigo, detalhe_codigo) VALUES(2, 3);
INSERT INTO tb_refeicoes_detalhes(refeicao_codigo, detalhe_codigo) VALUES(2, 2);
