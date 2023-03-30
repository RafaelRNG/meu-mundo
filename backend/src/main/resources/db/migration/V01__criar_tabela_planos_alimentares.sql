CREATE TABLE planos_alimentares(
    codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    descricao TEXT
);

INSERT INTO planos_alimentares(nome, descricao) VALUES('Alimentação 1', 'Alimentação para ganho de massa muscular!');