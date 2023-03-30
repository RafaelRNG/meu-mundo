CREATE TABLE IF NOT EXISTS tb_alimentacoes (
    codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    minimo_carbo DECIMAL(15,3) NOT NULL,
    minimo_proteina DECIMAL(15,3) NOT NULL,
    minimo_gordura DECIMAL(15,3),
    horario TIME NOT NULL
);

INSERT INTO tb_alimentacoes(nome, descricao, minimo_carbo, minimo_proteina, minimo_gordura, horario) VALUES('Café da manhã', 'Refeição mais proteica do meu dia', 100, 100, 0.5, '08:30');