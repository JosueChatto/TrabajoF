CREATE DATABASE IF NOT EXISTS Usuarios;
USE Usuarios;

CREATE TABLE usuarioj (
    idJugador INT PRIMARY KEY AUTO_INCREMENT,
    gamertag VARCHAR(255),
    nombre VARCHAR(255),
    apellidos VARCHAR(255),
    edad INT,
    idDif INT,
    idPuntos INT,
    FOREIGN KEY (idDif) REFERENCES dificultad(idDif),
    FOREIGN KEY (idPuntos) REFERENCES puntosProg(idPuntos)
);
CREATE TABLE cuestionario (
    idCuest INT PRIMARY KEY AUTO_INCREMENT,
    asignatura VARCHAR(255),pregunta VARCHAR(255), respuesta VARCHAR(255)
);
CREATE TABLE dificultad (
    idDif INT PRIMARY KEY AUTO_INCREMENT,
    nivelDificultad VARCHAR(255),
    idCuest INT,
    FOREIGN KEY (idCuest) REFERENCES cuestionario(idCuest)
);
CREATE TABLE puntosProg (
    idPuntos INT PRIMARY KEY AUTO_INCREMENT,
    idJugador INT, puntos INT,
    FOREIGN KEY (idJugador) REFERENCES usuarioj(idJugador)
);

INSERT INTO usuarioj (gamertag, nombre, apellidos, edad, idDif, idPuntos)
VALUES
    ('Gamer1', 'Juan', 'Pérez', 25, 1, 1),
    ('Player2', 'María', 'López', 30, 2, 2),
    ('ProGamer', 'Carlos', 'Gómez', 22, 3, 3);

INSERT INTO cuestionario (asignatura, pregunta, respuesta)
VALUES
    ('Matemáticas', '¿Cuánto es 2 + 2?', '4'),
    ('Ciencias', '¿Cómo se llama el proceso de cambio de estado del agua a gas?', 'Vaporización'),
    ('Geografa', '¿Como se llama el estado mas grande de México?', 'Chihuahua'),
    ('Matemáticas', '¿Cuál es la fórmula del teorema de Pitágoras?', 'a^2 + b^2 = c^2'),
    ('Ciencias', 'Elemento de la tabla periodica que su nomenclatura es la H.', 'Hidrogeno'),
    ('Geografia', 'Cuantos Continentes hay en el mundo', '5');

INSERT INTO dificultad (nivelDificultad, idCuest)
VALUES
    ('Fácil', 1),  
    ('Difícil', 4);

INSERT INTO puntosProg (idJugador, puntos)
VALUES
    (1, 100), 
    (2, 150),  
    (3, 200);