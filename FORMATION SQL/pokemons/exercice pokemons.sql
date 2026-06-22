-- Active: 1780567016181@@127.0.0.1@3306@pokemon_CDIIA
use pokemon_CDIIA;
-- 1. Réaliser une requête pour récupérer l'intégralité de la liste des pokemons

SELECT *
FROM pokemon;

-- 2. Réaliser une requête pour récupérer uniquement le nom (français) de tous les pokemons
SELECT pok_nom
FROM pokemon;


-- 3. Réaliser une requête qui récupère le nom (français) de tous les pokemons de la première génération
SELECT pok_nom
FROM pokemon
WHERE pok_generation = 1;

-- 4. Réaliser une requête qui compte le nombre de pokemon de la première génération
SELECT COUNT(*) AS nb_pokemon_gen1
FROM pokemon
WHERE pok_generation = 1;   
-- 5. Réaliser une requête qui affiche tous les pokemon en les triant par id
SELECT *
FROM pokemon
ORDER BY id ASC;

-- 6. Créer une requête créant une nouvelle table nommée "display", avec les deux champs suivants :
    -- id_display en entier, clé primaire auto incrémenté
    -- libelle_display en varchar(50)
CREATE TABLE IF NOT EXISTS display
(
 	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    libelle_display VARCHAR(50) NOT NULL
)Engine=INNODB;

-- 7. Insérer des valeurs dans la table display
-- Les valeurs seront "normal" & "shiny"
INSERT INTO display (libelle_display)
VALUES ('normal'), ('shiny');

-- 8. Créer une table intermédiaire "pokemon_display" qui servira de jonction entre les deux tables pokemon et display
-- Ajouter les clés étrangères soit directement dans la requête de création de table, soit dans une requête séparée
CREATE TABLE IF NOT EXISTS pokemon_display
(
	id_pokemon INT NOT NULL,
    id_display INT NOT NULL,
    FOREIGN KEY (id_pokemon) REFERENCES pokemon(id),
    FOREIGN KEY (id_display) REFERENCES display(id),
    PRIMARY KEY (id_pokemon, id_display)
);
-- 9. Insérer 2 pokemon, ceux que vous souhaitez en tant que pokemon shiny avec un INSERT simple (en mettant des id manuellement)
-- Façon classique (celle demandée ici)

INSERT INTO pokemon_display (id_pokemon, id_display)
VALUES (1, 2), -- Bulbizarre en shiny
       (4, 2); -- Salamèche en shiny    


-- Pour info, une façon un peu plus propre ici
-- INSERT INTO pokemon_display(id_pokemon, id_display)
-- VALUES 
-- (
--    (SELECT id FROM pokemon WHERE pok_nom = 'Dracaufeu'), -- id pokemon de dracaufeu
--    (SELECT id FROM display WHERE libelle_display = 'shiny') -- id display de shiny
-- );

-- Pour info encore, une façon encore plus propre, je trouve
-- Car ici je peux facilement cibler plusieurs pokemon existant en modifiant mon WHERE
-- INSERT INTO pokemon_display (id_pokemon, id_display)
-- SELECT p.id, (SELECT id FROM display WHERE libelle_display = 'shiny')
-- FROM pokemon p
-- WHERE pok_nom = 'Tortank'

-- 10. Affichez le nom des pokemons et filtrer uniquement avec les pokemons shiny grâce deux jointures
-- (Je veux un WHERE display_libelle='shiny')
-- Posez vous la question suivante : Pourquoi le WHERE est totalement useless dans CE cas précis ?
SELECT p.pok_nom
FROM pokemon p
INNER JOIN pokemon_display pd
    ON p.id = pd.id_pokemon
INNER JOIN display d
    ON pd.id_display = d.id_display
WHERE d.libelle_display = 'shiny';

-- 11. Insérer le reste des pokemon de la première génération en tant que pokemon "normaux" 
-- Avec une requête insert "avec jointures" propres 
-- Donc il faut une sous requête pour récupérer proprement l'id du display par son libellé
-- Il vous faudra sûrement utiliser des LEFT JOIN ici
-- (Et / ou requête imbriquée également)

INSERT INTO pokemon_display (id_pokemon, id_display)
SELECT p.id,
       (SELECT id FROM display WHERE libelle_display = 'normal')
FROM pokemon p
LEFT JOIN pokemon_display pd
    ON pd.id_pokemon = p.id
WHERE p.pok_generation = 1
  AND pd.id_pokemon IS NULL;


-- 12. Modifier les deux pokemons "shiny" en pokemon "normaux"
-- Egalement avec une jointure (sous requête) propre pour récupérer l'id dans display correspondant à "normal" & "shiny" 
-- N'oubliez pas le WHERE

UPDATE pokemon_display
SET id_display = (SELECT id_display FROM display WHERE libelle_display = 'normal')
WHERE id_display = (SELECT id_display FROM display WHERE libelle_display = 'shiny');


-- 13. Supprimer l'option "shiny" avec une requête DELETE
DELETE FROM display 
WHERE libelle_display = 'shiny'

-- 14. Réaliser les jointures pour connaître en lettre les types de chaque pokemon
-- Affichez uniquement le nom du pokemon et son type en toute lettre
-- A noter que certains pokemon ont plusieurs types

SELECT p.pok_nom,
       t.typ_libelle
FROM pokemon p
INNER JOIN pokemon_type pt
    ON p.id = pt.id_pokemon
INNER JOIN type t
    ON pt.id_type = t.id;

-- 15. Réaliser une requête qui vous permet de connaître la taille moyenne des pokémons de type plante
SELECT AVG(p.pok_taille) AS taille_moyenne
FROM pokemon p
INNER JOIN pokemon_type pt
    ON p.id = pt.id_pokemon
INNER JOIN type t
    ON pt.id_type = t.id
WHERE t.typ_libelle = 'Plante';

-- 16. Réaliser une requête avec jointure pour récupérer les pokemons de la première génération et leurs statistiques
-- Afficher le nom du pokemon, la position en chiffre de la stat, le libelle de la position en lettre, le libellé de la statistique et la valeur de la stat
SELECT p.pok_nom,
       ps.pokstat_statpos,
       ps.pokstat_statpos_libelle,
       s.stat_libelle,
       ps.pokstat_value
FROM pokemon p
INNER JOIN pokemon_stat ps    ON p.id = ps.id_pokemon = p.id
INNER JOIN statistique s ON s.id = ps.id_statistique
WHERE p.pok_generation = 1;


-- 17. Réaliser toutes les jointures possibles sur toute la base
-- pokemon - type - stats - display - talent
-- SAUF version
SELECT p.pok_nom,
       t.typ_libelle,
       s.stat_libelle,
       d.libelle_display,
       ta.tal_libelle
FROM pokemon p
INNER JOIN pokemon_type pt
    ON p.id = pt.id_pokemon
INNER JOIN type t
    ON pt.id_type = t.id
INNER JOIN pokemon_stat ps    ON p.id = ps.id_pokemon
INNER JOIN statistique s ON s.id = ps.id_statistique
INNER JOIN pokemon_display pd
    ON p.id = pd.id_pokemon
INNER JOIN display d
    ON pd.id_display = d.id
INNER JOIN pokemon_talent ptal
    ON p.id = ptal.id_pokemon
INNER JOIN talent ta
    ON ptal.id_talent = ta.id;  

-- 18. Réaliser une requête qui regroupe les pokemons par type afin de compter le nombre de pokemon de chaque type
-- Uniquement pour la première génération
-- Afficher le type correspondant en première colonne
-- PS : Notez que certains pokemon ont plusieurs types
SELECT t.typ_libelle,
       COUNT(DISTINCT p.id) AS nb_pokemon
FROM pokemon p
INNER JOIN pokemon_type pt
    ON p.id = pt.id_pokemon
INNER JOIN type t
    ON pt.id_type = t.id
WHERE p.pok_generation = 1
GROUP BY t.id;

-- 19. Réaliser une requête qui affiche le nom des pokemons ayant plusieurs types
SELECT p.pok_nom
FROM pokemon p
INNER JOIN pokemon_type pt
    ON p.id = pt.id_pokemon
GROUP BY p.id
HAVING COUNT(pt.id_type) > 1;   

-- 20. Réaliser une requête qui affiche le nombre de pokemons ayant plusieurs types
SELECT COUNT(*) AS nb_pokemon_multi_types
FROM (
    SELECT p.id
    FROM pokemon p
    INNER JOIN pokemon_type pt
        ON p.id = pt.id_pokemon
    GROUP BY p.id
    HAVING COUNT(pt.id_type) > 1
) AS subquery;

-- 21. Réfléchissez à une requête SQL qui serait faisable sur cette base qui vous poserait souci ! 
-- Le but est d'essayer de la faire vous-même, si vous n'y arrivez pas, ça n'est pas grave.
-- Envoyez moi vos énoncé à minima !!!! (Besoin d'inspiration pour les futures formations sur cette base ^^)

-- Bonus : 
-- Réaliser une requête qui récupère le nombre de pokémons de chaque type ainsi que leur taille moyenne 
SELECT t.typ_libelle,
       COUNT(p.id) AS nb_pokemon,
       AVG(p.pok_taille) AS taille_moyenne
FROM pokemon p
INNER JOIN pokemon_type pt
    ON p.id = pt.id_pokemon
INNER JOIN type t
    ON pt.id_type = t.id
WHERE p.pok_generation = 1
GROUP BY t.typ_libelle;
