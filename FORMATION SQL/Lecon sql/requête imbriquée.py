""
Une requête imbriquée (ou sous-requête) est une requête SQL placée à l'intérieur d'une autre requête.

Syntaxe générale
SELECT colonne
FROM table
WHERE colonne OPERATOR (
    SELECT colonne
    FROM autre_table
);


1. Sous-requête dans WHERE
Afficher les commandes du client "Dupont"
SELECT *
FROM commandes
WHERE client_id = (
    SELECT id
    FROM clients
    WHERE nom = 'Dupont'
);
Explication
La sous-requête trouve l'ID du client Dupont.
La requête principale affiche ses commandes.


2. Sous-requête avec IN
Afficher les produits présents dans au moins une commande
SELECT *
FROM produits
WHERE id IN (
    SELECT produit_id
    FROM commandes_produits
);

3. Sous-requête avec NOT IN
Produits jamais commandés
SELECT *
FROM produits
WHERE id NOT IN (
    SELECT produit_id
    FROM commandes_produits
);

4. Sous-requête dans FROM
Nombre de commandes par client
SELECT nom_client, nb_commandes
FROM (
    SELECT c.nom AS nom_client,
           COUNT(co.id) AS nb_commandes
    FROM clients c
    LEFT JOIN commandes co
    ON c.id = co.client_id
    GROUP BY c.nom
) AS resultat;

La sous-requête crée une table temporaire appelée resultat.

5. Sous-requête avec EXISTS
Clients ayant au moins une commande
SELECT *
FROM clients c
WHERE EXISTS (
    SELECT *
    FROM commandes co
    WHERE co.client_id = c.id
);

6. Sous-requête avec NOT EXISTS
Clients n'ayant jamais passé de commande
SELECT *
FROM clients c
WHERE NOT EXISTS (
    SELECT *
    FROM commandes co
    WHERE co.client_id = c.id
);

7. Sous-requête retournant une valeur agrégée
Produit le plus cher
SELECT *
FROM produits
WHERE prix = (
    SELECT MAX(prix)
    FROM produits
);

8. Sous-requête corrélée

La sous-requête dépend de la requête principale.

Clients ayant passé plus d'une commande
SELECT *
FROM clients c
WHERE (
    SELECT COUNT(*)
    FROM commandes co
    WHERE co.client_id = c.id
) > 1;

Pour chaque client, SQL compte ses commandes.

Exemples adaptés à ton MCD
Clients ayant commandé le produit "Ordinateur"
SELECT *
FROM clients
WHERE id IN (
    SELECT co.client_id
    FROM commandes co
    JOIN commandes_produits cp
        ON co.id = cp.commande_id
    JOIN produits p
        ON cp.produit_id = p.id
    WHERE p.nom = 'Ordinateur'
);

Commandes contenant plus de 3 produits
SELECT *
FROM commandes
WHERE id IN (
    SELECT commande_id
    FROM commandes_produits
    GROUP BY commande_id
    HAVING COUNT(produit_id) > 3
);

Client ayant passé le plus de commandes
SELECT *
FROM clients
WHERE id = (
    SELECT client_id
    FROM commandes
    GROUP BY client_id
    ORDER BY COUNT(*) DESC
    LIMIT 1
);

Résumé
Opérateur	Utilisation
=	Sous-requête retourne une seule valeur
IN	Plusieurs valeurs
NOT IN	Exclusion
EXISTS	Vérifie l'existence
NOT EXISTS	Vérifie l'absence
FROM (SELECT ...)	Table temporaire
Requête corrélée	Dépend de la ligne courante

Les requêtes imbriquées sont souvent demandées en exercices et
 examens SQL pour éviter certaines jointures ou pour exprimer des conditions complexes de façon plus lisible.

""