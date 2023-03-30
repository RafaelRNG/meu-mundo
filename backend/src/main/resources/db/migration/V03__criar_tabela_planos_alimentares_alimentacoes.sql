CREATE TABLE IF NOT EXISTS tb_alimentacao_plano(
    plano_codigo BIGINT NOT NULL,
    alimentacao_codigo BIGINT NOT NULL,

    FOREIGN KEY (plano_codigo) REFERENCES tb_planos_alimentares(codigo),
    FOREIGN KEY (alimentacao_codigo) REFERENCES tb_alimentacoes(codigo),

    PRIMARY KEY(plano_codigo, alimentacao_codigo)
);

INSERT INTO tb_alimentacao_plano(plano_codigo, alimentacao_codigo) VALUES (1, 1);