CREATE TABLE IF NOT EXISTS tb_alimentos(
   codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
   nome VARCHAR(200)
);

INSERT INTO tb_alimentos(nome) VALUES('Frango');
INSERT INTO tb_alimentos(nome) VALUES('Aveia flocado');
INSERT INTO tb_alimentos(nome) VALUES('Pão');