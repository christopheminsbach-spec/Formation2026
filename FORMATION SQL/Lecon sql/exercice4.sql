-- Active: 1780567016181@@127.0.0.1@3306@gestion_commandes
""
-- 1. Afficher tous les clients
-- 2. Afficher uniquement les noms, prénoms et emails des clients
-- 3. Afficher les clients habitant à Metz
-- 4. Afficher les commandes avec le nom du client associé
-- 5. Afficher toutes les commandes du client Dupont
-- 6. Afficher les produits d'une commande
-- 7. Afficher toutes les commandes avec leurs produits
-- 8. Afficher le détail complet : client, commande, produit
""
#Afficher tous les clients
SELECT * 
FROM clients;
#Afficher uniquement les noms, prénoms et emails des clients

SELECT nom, prenom, email 
FROM clients;
#Afficher les clients habitant à Metz

SELECT * 
FROM clients 
WHERE ville = 'Metz';

#Afficher les commandes avec le nom du client associé
SELECT commandes.id, clients.nom 
FROM commandes 
JOIN clients ON commandes.client_id = clients.id;

#Afficher toutes les commandes du client Dupont
SELECT commandes.* 
FROM commandes 
JOIN clients ON commandes.client_id = clients.id 
WHERE clients.nom = 'Dupont';

#Afficher les produits d'une commande
SELECT p.* 
FROM produits p
JOIN commandes_produits cp ON p.id = cp.produit_id 
WHERE cp.commande_id = 1; -- Remplacez 1 par l'ID de la commande souhaitée

#Afficher toutes les commandes avec leurs produits
SELECT commandes.id, produits.nom 
FROM commandes 
JOIN commandes_produits ON commandes.id = commandes_produits.commande_id 
JOIN produits ON commandes_produits.produit_id = produits.id;

#Afficher le détail complet : client, commande, produit
SELECT clients.nom, commandes.id, produits.nom 
FROM clients 
JOIN commandes ON clients.id = commandes.client_id 
JOIN commandes_produits ON commandes.id = commandes_produits.commande_id 
JOIN produits ON commandes_produits.produit_id = produits.id;

""
Bien sûr. En ajoutant les clés primaires (PK) et les clés étrangères (FK), voici le modèle :

Tables et clés

CLIENT
Attribut	Type de clé
id_client	PK
nom	
prenom	
email	
ville
""

""
COMMANDE
Attribut	Type de clé
id_commande	PK
date_commande	
id_client	FK → CLIENT(id_client)

Relation :

Un client possède plusieurs commandes.
La clé étrangère id_client relie chaque commande à son client.
""

""
COMMANDE
Attribut	Type de clé
id_commande	PK
date_commande	
id_client	FK → CLIENT(id_client)

Relation :

Un client possède plusieurs commandes.
La clé étrangère id_client relie chaque commande à son client.
""

""
COMMANDE_PRODUIT
Attribut	Type de clé
id_commande	PK, FK → COMMANDE(id_commande)
id_produit	PK, FK → PRODUIT(id_produit)
quantite	

Cette table sert à gérer la relation N:N entre commandes et produits.
""

""
Schéma relationnel complet

CLIENT
------
PK id_client
   nom
   prenom
   email
   ville


COMMANDE
--------
PK id_commande
   date_commande
FK id_client → CLIENT(id_client)


PRODUIT
-------
PK id_produit
   nom
   prix
   stock


COMMANDE_PRODUIT
----------------
PK,FK id_commande → COMMANDE(id_commande)
PK,FK id_produit  → PRODUIT(id_produit)
      quantite
""

""
MCD avec cardinalités et clés étrangères

CLIENT
PK id_client
nom
prenom
email
ville

      1,N
CLIENT ---------------- COMMANDE
                         PK id_commande
                         date_commande
                         FK id_client

                              1,N
COMMANDE --------------- COMMANDE_PRODUIT --------------- PRODUIT
PK id_commande           PK,FK id_commande               PK id_produit
                         PK,FK id_produit                nom
                         quantite                        prix
                                                         stock
                              N,1

Résumé des clés étrangères                          

| Table            | Clé étrangère | Référence             |
| ---------------- | ------------- | --------------------- |
| COMMANDE         | id_client     | CLIENT(id_client)     |
| COMMANDE_PRODUIT | id_commande   | COMMANDE(id_commande) |
| COMMANDE_PRODUIT | id_produit    | PRODUIT(id_produit)   |

""