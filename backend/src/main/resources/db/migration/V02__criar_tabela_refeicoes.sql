CREATE TABLE IF NOT EXISTS tb_refeicoes (
    codigo BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    minimo_carbo DECIMAL(15,3) NOT NULL,
    minimo_proteina DECIMAL(15,3) NOT NULL,
    minimo_gordura DECIMAL(15,3),
    horario TIME NOT NULL
);

INSERT INTO  tb_refeicoes(nome, descricao, minimo_carbo, minimo_proteina, minimo_gordura, horario) VALUES('Café da manhã', 'Refeição mais proteica do meu dia', 100, 100, 0.5, '08:30');
INSERT INTO  tb_refeicoes(nome, descricao, minimo_carbo, minimo_proteina, minimo_gordura, horario) VALUES('Almoço', 'Refeição Com muito carbo', 250.00, 10.5, 0.5, '12:15');
INSERT INTO  tb_refeicoes(nome, descricao, minimo_carbo, minimo_proteina, minimo_gordura, horario) VALUES('Café da tarde', 'Refeição pré-treino', 250.00, 10.5, 0.5, '16:00');
INSERT INTO  tb_refeicoes(nome, descricao, minimo_carbo, minimo_proteina, minimo_gordura, horario) VALUES('Janta', 'Refeição pós-treino', 250.00, 10.5, 0.5, '20:15');