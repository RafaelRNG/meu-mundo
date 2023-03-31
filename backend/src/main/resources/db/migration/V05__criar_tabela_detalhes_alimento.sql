CREATE TABLE IF NOT EXISTS tb_detalhes_alimentos(
   codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
   carbo DECIMAL(15, 2) NOT NULL,
   proteina DECIMAL(15, 2) NOT NULL,
   gordura DECIMAL(15, 2),
   codigo_alimento BIGINT NOT NULL,

   FOREIGN KEY (codigo_alimento) REFERENCES tb_alimentos(codigo)
);

INSERT INTO tb_detalhes_alimentos(carbo, proteina, gordura, codigo_alimento) VALUES (15.72, 27.21, 0.32, 1);