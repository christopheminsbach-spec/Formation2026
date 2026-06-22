-- Active: 1780567016181@@127.0.0.1@3306@script_database_eval_library.sql
-- Évaluation SQL
-- PENSEZ A RENOMMER LE FICHIER AVEC VOTRE NOM ET PRENOM SVP.
-- Pas de stress, tout est assez simple.
-- ATTENTION ! Pensez à renommer le fichier avec votre NOM et Prénom : Si ça n'est pas fait, vous perdez 1 point sur l'éval (Non, ce n'est pas un point bonus de mettre votre nom et prénom)
-- Les 12 premières requêtes très simple valent chacun 1 point (donc ça fait 12 points)
-- Requêtes 13, 14 et 15 valent 2 points (donc ça fait 6 points - Ici on est à 18, au cas où, ça vous évitera de sortir votre calculatrice ;D)
-- Requête 16 vaut jusqu'à 4 points (ce qui permet de noter jusqu'à 22 si vous faites tout parfaitement. Non, j'ai pas menti ! La procédure est en bonus allez regarder l'intitulé de la demande !!)
-- Bon courage !

-- 1. Réaliser une requête pour récupérer l'intégralité de la liste des livres (table book)
SELECT * FROM book;
	
Éditer Éditer
Copier Copier
Supprimer Supprimer
1
Fondation
978-2-07-036053-6
1951
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
2
Les Dépossédés
978-2-07-029391-9
1974
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
3
Le Crime de l’Orient-Express
978-2-01-000915-7
1934
3

Éditer Éditer
Copier Copier
Supprimer Supprimer
4
1984
978-2-07-036822-8
1949
6

Éditer Éditer
Copier Copier
Supprimer Supprimer
5
Vingt mille lieues sous les mers
978-2-07-040849-8
1870
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
6
Dune
978-2-266-11156-4
1965
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
7
Le Seigneur des Anneaux
978-2-07-061288-8
1954
2

Éditer Éditer
Copier Copier
Supprimer Supprimer
8
Surveiller et punir
978-2-07-010619-6
1975
6

Éditer Éditer
Copier Copier
Supprimer Supprimer
9
Clean Code
978-0-13-235088-4
2008
5

Éditer Éditer
Copier Copier
Supprimer Supprimer
10
Clean Architecture
978-0-13-449416-6
2017
5

Éditer Éditer
Copier Copier
Supprimer Supprimer
11
La cuisine simple
978-2-01-946662-3
2010
7

Éditer Éditer
Copier Copier
Supprimer Supprimer
12
L’art de bien vivre
978-2-08-140271-7
2016
8

Éditer Éditer
Copier Copier
Supprimer Supprimer
13
La machine à explorer le temps
978-2-07-046757-0
1895
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
14
Mrs Dalloway
978-0-15-662870-9
1925
6

Éditer Éditer
Copier Copier
Supprimer Supprimer
15
La ferme des animaux
978-2-07-036822-9
1945
6

Éditer Éditer
Copier Copier
Supprimer Supprimer
16
Sapiens : Une brève histoire de l’humanité
978-2-226-25701-7
2011
4

-- 2. Réaliser une requête pour récupérer uniquement le titre de tous les livres
SELECT title FROM book;

Éditer Éditer
Copier Copier
Supprimer Supprimer
Fondation

Éditer Éditer
Copier Copier
Supprimer Supprimer
Les Dépossédés

Éditer Éditer
Copier Copier
Supprimer Supprimer
Le Crime de l’Orient-Express

Éditer Éditer
Copier Copier
Supprimer Supprimer
1984

Éditer Éditer
Copier Copier
Supprimer Supprimer
Vingt mille lieues sous les mers

Éditer Éditer
Copier Copier
Supprimer Supprimer
Dune

Éditer Éditer
Copier Copier
Supprimer Supprimer
Le Seigneur des Anneaux

Éditer Éditer
Copier Copier
Supprimer Supprimer
Surveiller et punir

Éditer Éditer
Copier Copier
Supprimer Supprimer
Clean Code

Éditer Éditer
Copier Copier
Supprimer Supprimer
Clean Architecture

Éditer Éditer
Copier Copier
Supprimer Supprimer
La cuisine simple

Éditer Éditer
Copier Copier
Supprimer Supprimer
L’art de bien vivre

Éditer Éditer
Copier Copier
Supprimer Supprimer
La machine à explorer le temps

Éditer Éditer
Copier Copier
Supprimer Supprimer
Mrs Dalloway

Éditer Éditer
Copier Copier
Supprimer Supprimer
La ferme des animaux

Éditer Éditer
Copier Copier
Supprimer Supprimer
Sapiens : Une brève histoire de l’humanité


-- 3. Réaliser une requête qui récupère le titre de tous les livres publiés après l'année 2000
SELECT title FROM book WHERE published_year > 2000;

Éditer Éditer
Copier Copier
Supprimer Supprimer
Clean Code

Éditer Éditer
Copier Copier
Supprimer Supprimer
Clean Architecture

Éditer Éditer
Copier Copier
Supprimer Supprimer
La cuisine simple

Éditer Éditer
Copier Copier
Supprimer Supprimer
L’art de bien vivre

Éditer Éditer
Copier Copier
Supprimer Supprimer
Sapiens : Une brève histoire de l’humanité


-- 4. Réaliser une requête qui récupère le titre de tous les livres publiés avant l'année 1975 et contenant la lettre 's' (n'importe où dans le nom du livre, non sensible à la casse)
SELECT title FROM book WHERE published_year < 1975 AND title LIKE '%s%';
Éditer Éditer
Copier Copier
Supprimer Supprimer
Les Dépossédés

Éditer Éditer
Copier Copier
Supprimer Supprimer
Le Crime de l’Orient-Express

Éditer Éditer
Copier Copier
Supprimer Supprimer
Vingt mille lieues sous les mers

Éditer Éditer
Copier Copier
Supprimer Supprimer
Le Seigneur des Anneaux

Éditer Éditer
Copier Copier
Supprimer Supprimer
La machine à explorer le temps

Éditer Éditer
Copier Copier
Supprimer Supprimer
Mrs Dalloway

Éditer Éditer
Copier Copier
Supprimer Supprimer
La ferme des animaux

-- 5. Réaliser une requête qui affiche tous les livres en les triant par année de publication (du plus récent au plus ancien)
SELECT * FROM book ORDER BY published_year DESC;
	
Éditer Éditer
Copier Copier
Supprimer Supprimer
10
Clean Architecture
978-0-13-449416-6
2017
5

Éditer Éditer
Copier Copier
Supprimer Supprimer
12
L’art de bien vivre
978-2-08-140271-7
2016
8

Éditer Éditer
Copier Copier
Supprimer Supprimer
16
Sapiens : Une brève histoire de l’humanité
978-2-226-25701-7
2011
4

Éditer Éditer
Copier Copier
Supprimer Supprimer
11
La cuisine simple
978-2-01-946662-3
2010
7

Éditer Éditer
Copier Copier
Supprimer Supprimer
9
Clean Code
978-0-13-235088-4
2008
5

Éditer Éditer
Copier Copier
Supprimer Supprimer
8
Surveiller et punir
978-2-07-010619-6
1975
6

Éditer Éditer
Copier Copier
Supprimer Supprimer
2
Les Dépossédés
978-2-07-029391-9
1974
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
6
Dune
978-2-266-11156-4
1965
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
7
Le Seigneur des Anneaux
978-2-07-061288-8
1954
2

Éditer Éditer
Copier Copier
Supprimer Supprimer
1
Fondation
978-2-07-036053-6
1951
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
4
1984
978-2-07-036822-8
1949
6

Éditer Éditer
Copier Copier
Supprimer Supprimer
15
La ferme des animaux
978-2-07-036822-9
1945
6

Éditer Éditer
Copier Copier
Supprimer Supprimer
3
Le Crime de l’Orient-Express
978-2-01-000915-7
1934
3

Éditer Éditer
Copier Copier
Supprimer Supprimer
14
Mrs Dalloway
978-0-15-662870-9
1925
6

Éditer Éditer
Copier Copier
Supprimer Supprimer
13
La machine à explorer le temps
978-2-07-046757-0
1895
1

Éditer Éditer
Copier Copier
Supprimer Supprimer
5
Vingt mille lieues sous les mers
978-2-07-040849-8
1870
1


-- 6. Réaliser une requête avec jointure pour afficher le titre du livre et le nom de sa catégorie
SELECT b.title, c.name FROM book b JOIN category c ON b.id_category = c.id;
Fondation
Science-fiction
Les Dépossédés
Science-fiction
Vingt mille lieues sous les mers
Science-fiction
Dune
Science-fiction
La machine à explorer le temps
Science-fiction
Le Seigneur des Anneaux
Fantasy
Le Crime de l’Orient-Express
Policier
Sapiens : Une brève histoire de l’humanité
Histoire
Clean Code
Informatique
Clean Architecture
Informatique
1984
Philosophie
Surveiller et punir
Philosophie
Mrs Dalloway
Philosophie
La ferme des animaux
Philosophie
La cuisine simple
Cuisine
L’art de bien vivre
Développement personnel


-- 7. Réaliser une requête qui compte le nombre de livres par catégorie (Afficher : nom de la catégorie et nombre de livres)
SELECT c.name, COUNT(b.id) AS book_count FROM category c LEFT JOIN book b ON c.id = b.id_category GROUP BY c.name;
name
book_count
Science-fiction
5
Fantasy
1
Policier
1
Histoire
1
Informatique
2
Philosophie
4
Cuisine
1
Développement personnel
1

-- 8. Créer une nouvelle table nommée "format", avec les deux champs suivants (Pensez au ENGINE=InnoDB) :
    -- id en entier, clé primaire auto incrémenté
    -- name en varchar(50)
CREATE TABLE format (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;    

Textes complets
id
name

Éditer Éditer
Copier Copier
Supprimer Supprimer
1
papier

Éditer Éditer
Copier Copier
Supprimer Supprimer
2
ebook

Éditer Éditer
Copier Copier
Supprimer Supprimer
3
Poche

Éditer Éditer
Copier Copier
Supprimer Supprimer
4
Broché

Éditer Éditer
Copier Copier
Supprimer Supprimer
5
Relié

Éditer Éditer
Copier Copier
Supprimer Supprimer
6
Numérique

Éditer Éditer
Copier Copier
Supprimer Supprimer
7
Livre audio

Éditer Éditer
Copier Copier
Supprimer Supprimer
8
Poche

Éditer Éditer
Copier Copier
Supprimer Supprimer
9
Broché

Éditer Éditer
Copier Copier
Supprimer Supprimer
10
Relié

Éditer Éditer
Copier Copier
Supprimer Supprimer
11
Numérique

Éditer Éditer
Copier Copier
Supprimer Supprimer
12
Livre audio

Éditer Éditer
Copier Copier
Supprimer Supprimer
13
papier

Éditer Éditer
Copier Copier
Supprimer Supprimer
14
ebook

Éditer Éditer
Copier Copier
Supprimer Supprimer
15
papier

Éditer Éditer
Copier Copier
Supprimer Supprimer
16
ebook
  
INSERT INTO format (name) VALUES
('Poche'),
('Broché'),
('Relié'),
('Numérique'),
('Livre audio');
-- 9. Insérer des valeurs dans la table format
-- Les valeurs seront "papier" & "ebook"
INSERT INTO format (name) VALUES ('papier'), ('ebook'); 

-- 10. Créer une table intermédiaire "book_format" qui servira de jonction entre les deux tables book et format
-- Contraintes attendues (clé primaire composée des deux clés étrangères requise) :
-- - id_book en clé étrangère vers book(id)
-- - id_format en clé étrangère vers format(id)
-- Ajouter les clés étrangères soit directement dans la requête de création de table, soit dans une requête séparée
CREATE TABLE book_format (
    id_book INT NOT NULL,
    id_format INT NOT NULL,

    PRIMARY KEY (id_book, id_format),

    FOREIGN KEY (id_book) REFERENCES book(id),
    FOREIGN KEY (id_format) REFERENCES format(id)
) ENGINE=InnoDB;


Éditer Éditer
Copier Copier
Supprimer Supprimer
9
4

Éditer Éditer
Copier Copier
Supprimer Supprimer
10
4

-- 11. Insérer 2 livres en tant que livres "ebook" avec une insertion de données simple (Vous choisissez les livres. Mettez des id manuellement dans book_format)
INSERT INTO book_format (id_book, id_format) VALUES
(9, 4), -- Clean Code en format ebook
(10, 4); -- Clean Architecture en format ebook  

-- 12. Affichez le titre des livres et filtrer uniquement sur les livres "ebook" grâce à des jointures (Je veux un WHERE format.name='ebook'     ...ou alias, évidemment)
SELECT b.title FROM book b
JOIN book_format bf ON b.id = bf.id_book
JOIN format f ON bf.id_format = f.id
WHERE f.name = 'ebook';
title
Clean Code
Clean Architecture  

-- 13. Réaliser les jointures pour afficher la liste des livres et leurs auteurs
SELECT
    b.title,
    a.firstname,
    a.lastname
FROM book b
JOIN book_author ba
    ON b.id = ba.id_book
JOIN author a
    ON ba.id_author = a.id
ORDER BY b.title, a.lastname;

1984
George
Orwell
Clean Architecture
Isaac
Asimov
Clean Architecture
Robert
Martin
Clean Code
Isaac
Asimov
Clean Code
Robert
Martin
Dune
Isaac
Asimov
Dune
Frank
Herbert
Fondation
Isaac
Asimov
Fondation
Frank
Herbert
La cuisine simple
Virginia
Woolf
La ferme des animaux
George
Orwell
La machine à explorer le temps
Jules
Verne
Le Crime de l’Orient-Express
Agatha
Christie
Le Seigneur des Anneaux
J.R.R.
Tolkien
Les Dépossédés
Ursula
Le Guin
L’art de bien vivre
Michel
Foucault
Mrs Dalloway
Virginia
Woolf
Sapiens : Une brève histoire de l’humanité
Yuval Noah
Harari
Surveiller et punir
Michel
Foucault
Vingt mille lieues sous les mers
Isaac
Asimov
Vingt mille lieues sous les mers
Jules
Verne


-- Affichez : titre du livre, prénom de l’auteur, nom de l’auteur
-- A noter que certains livres ont plusieurs auteurs
-- Vous pouvez soit afficher un auteur par ligne, soit regrouper les auteurs dans une seule donnée. A votre convenance.
SELECT
    b.title,
    a.firstname,
    a.lastname
FROM book b
JOIN book_author ba
    ON b.id = ba.id_book
JOIN author a
    ON ba.id_author = a.id
ORDER BY b.title, a.lastname, a.firstname;

	
title Croissant 1
firstname
lastname
1984
George
Orwell
Clean Architecture
Isaac
Asimov
Clean Architecture
Robert
Martin
Clean Code
Isaac
Asimov
Clean Code
Robert
Martin
Dune
Isaac
Asimov
Dune
Frank
Herbert
Fondation
Isaac
Asimov
Fondation
Frank
Herbert
La cuisine simple
Virginia
Woolf
La ferme des animaux
George
Orwell
La machine à explorer le temps
Jules
Verne
Le Crime de l’Orient-Express
Agatha
Christie
Le Seigneur des Anneaux
J.R.R.
Tolkien
Les Dépossédés
Ursula
Le Guin
L’art de bien vivre
Michel
Foucault
Mrs Dalloway
Virginia
Woolf
Sapiens : Une brève histoire de l’humanité
Yuval Noah
Harari
Surveiller et punir
Michel
Foucault
Vingt mille lieues sous les mers
Isaac
Asimov
Vingt mille lieues sous les mers
Jules
Verne



-- 14. Réaliser une requête qui affiche le nombre de livres ayant plusieurs auteurs
SELECT COUNT(DISTINCT id_book) AS book_count_with_multiple_authors
FROM book_author
GROUP BY id_book
HAVING COUNT(id_author) > 1;
book_count_with_multiple_authors
2   
-- 15. (REQUÊTE IMBRIQUÉE OBLIGATOIRE)
--     Afficher les titres des livres qui n'ont jamais été empruntés.
--     Contrainte : la requête doit contenir une sous-requête.

SELECT title
FROM book
WHERE id NOT IN (
    SELECT id_book
    FROM loan
);
title
Sapiens : Une brève histoire de l’humanité

-- 16 : PROCÉDURE STOCKÉE (Sans procédure stockée, la requête de recherche en elle même peut vous apporter deux points !)
-- Attention, ce bonus n'apportera des points que si tout est parfaitement bien fait dans les règles de l'art !
-- Créer une procédure stockée avec deux paramètres d'entrée : rechercher des livres par catégorie + année minimum.
--
-- Spécification :
--   - Nom de la procédure : get_books_by_category_and_year
--   - Paramètres :
--       - categoryName VARCHAR(80)
--       - minYear INT
--   - Résultat attendu :
--       Retourner la liste des livres (au minimum : title, published_year, category name)
--       dont la catégorie correspond à categoryName ET dont published_year >= minYear
--
-- Fournir aussi un exemple d'appel :
--   CALL get_books_by_category_and_year('Informatique', 2000);
DELIMITER //
CREATE PROCEDURE get_books_by_category_and_year (
    IN categoryName VARCHAR(80),
    IN minYear INT
)
BEGIN
    SELECT b.title, b.published_year, c.name AS category_name
    FROM book b
    JOIN category c ON b.id_category = c.id
    WHERE c.name = categoryName AND b.published_year >= minYear;
END //
DELIMITER ; 


      
-- =========================
-- Données complémentaires
-- Objectif : garantir que les requêtes de l'évaluation retournent des données.
-- En particulier :
-- - une catégorie "Histoire" contenant au moins un livre ;
-- - au moins un livre qui n'a jamais été emprunté.
-- =========================        

