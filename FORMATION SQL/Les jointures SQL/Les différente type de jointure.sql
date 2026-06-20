-- Active: 1780567016181@@127.0.0.1@3306@gestion_commandes
""
En SQL, les jointures permettent de combiner les données de plusieurs tables.

1. INNER JOIN (jointure interne)

Retourne uniquement les lignes ayant une correspondance dans les deux tables.

SELECT clients.nom, commandes.id
FROM clients
INNER JOIN commandes
ON clients.id = commandes.client_id;
Résultat
Client	Commande
Dupont	1
Martin	2

Les clients sans commande ne sont pas affichés.


2. LEFT JOIN (jointure externe gauche)

Retourne toutes les lignes de la table de gauche, même sans correspondance dans la table de droite.

SELECT clients.nom, commandes.id
FROM clients
LEFT JOIN commandes
ON clients.id = commandes.client_id;
Résultat
Client	Commande
Dupont	1
Martin	2
Durand	NULL

Durand apparaît même s'il n'a passé aucune commande.

3. RIGHT JOIN (jointure externe droite)

Retourne toutes les lignes de la table de droite, même sans correspondance dans la table de gauche.

SELECT clients.nom, commandes.id
FROM clients
RIGHT JOIN commandes
ON clients.id = commandes.client_id;
Résultat
Client	Commande
Dupont	1
Martin	2
NULL	3

La commande 3 apparaît même si aucun client correspondant n'est trouvé.

4. FULL OUTER JOIN

Retourne toutes les lignes des deux tables.

SELECT clients.nom, commandes.id
FROM clients
FULL OUTER JOIN commandes
ON clients.id = commandes.client_id;
Résultat
Client	Commande
Dupont	1
Martin	2
Durand	NULL
NULL	3

⚠️ Non disponible directement dans certaines versions de MySQL.

5. CROSS JOIN (produit cartésien)

Combine chaque ligne de la première table avec chaque ligne de la seconde.

SELECT clients.nom, produits.nom
FROM clients
CROSS JOIN produits;

Si :

3 clients
4 produits

Résultat : 3 × 4 = 12 lignes.


6. SELF JOIN (auto-jointure)

Une table est jointe avec elle-même.

Exemple : employés et leurs managers.

SELECT e.nom AS employe,
       m.nom AS manager
FROM employes e
LEFT JOIN employes m
ON e.manager_id = m.id;

Résumé
Jointure	Description
INNER JOIN	Seulement les correspondances
LEFT JOIN	Toutes les lignes de gauche + correspondances
RIGHT JOIN	Toutes les lignes de droite + correspondances
FULL OUTER JOIN	Toutes les lignes des deux tables
CROSS JOIN	Produit cartésien
SELF JOIN	Jointure d'une table avec elle-même

Schéma visuel
INNER JOIN
    A ∩ B

LEFT JOIN
    A + (A ∩ B)

RIGHT JOIN
    B + (A ∩ B)

FULL OUTER JOIN
    A ∪ B

CROSS JOIN
    A × B

SELF JOIN
    A ↔ A

""