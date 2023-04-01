CREATE TABLE IF NOT EXISTS tb_refeicoes_planos(
    plano_codigo BIGINT NOT NULL,
    refeicao_codigo BIGINT NOT NULL,

    FOREIGN KEY (plano_codigo) REFERENCES tb_planos_alimentares(codigo),
    FOREIGN KEY (refeicao_codigo) REFERENCES tb_refeicoes(codigo),

    PRIMARY KEY(plano_codigo, refeicao_codigo)
);

INSERT INTO tb_refeicoes_planos(plano_codigo, refeicao_codigo) VALUES (1, 1);