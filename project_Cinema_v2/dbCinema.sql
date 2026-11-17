-- Database e tabella dei film
CREATE DATABASE IF NOT EXISTS cinema
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE cinema;

CREATE TABLE IF NOT EXISTS film (
    id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titolo        VARCHAR(150)      NOT NULL,
    genere        VARCHAR(50)       NOT NULL,
    anno          SMALLINT UNSIGNED NOT NULL,
    img_locandina VARCHAR(255),
    link          VARCHAR(500),
    in_sala       BOOLEAN           NOT NULL DEFAULT TRUE
);

-- Dati iniziali (ex array filmInSala)
INSERT INTO film (titolo, genere, anno, img_locandina, link) VALUES
    ('Oppenheimer', 'Storico',    2023, 'img/oppenheimer.jpg', 'https://it.wikipedia.org/wiki/Oppenheimer_(film)'),
    ('Birdman',     'Fantastico', 2014, 'img/birdman.jpg',     'https://it.wikipedia.org/wiki/Birdman_(film)');
