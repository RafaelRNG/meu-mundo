CREATE TABLE IF NOT EXISTS tb_detalhes_alimentos(
   codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
   peso_bruto DECIMAL(15, 2) NOT NULL,
   carbo DECIMAL(15, 2) NOT NULL,
   proteina DECIMAL(15, 2) NOT NULL,
   gordura DECIMAL(15, 2),
   codigo_alimento BIGINT NOT NULL,

   FOREIGN KEY (codigo_alimento) REFERENCES tb_alimentos(codigo)
);

INSERT INTO tb_detalhes_alimentos(peso_bruto, carbo, proteina, gordura, codigo_alimento) VALUES (100.0, 3.0, 25.00, 7.0, 1);
INSERT INTO tb_detalhes_alimentos(peso_bruto, carbo, proteina, gordura, codigo_alimento) VALUES (30.00, 17.0, 2.0, 2.3, 2);
INSERT INTO tb_detalhes_alimentos(peso_bruto, carbo, proteina, gordura, codigo_alimento) VALUES (100.00, 56.00, 3.00, 3.0, 3);