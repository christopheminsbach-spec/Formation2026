
""
À partir du script SQL fourni, voici un MCD (Modèle Conceptuel de Données) complet en notation Merise.

Entités
POKEMON
#id
pok_nom
pok_name
pok_image_online
pok_generation
pok_taille
pok_poids
pok_percent_male
pok_percent_female

Relation récursive :

évolution_précédente
évolution_suivante


TYPE
#id
typ_libelle


TALENT
#id
tal_libelle


STATISTIQUE
#id
stat_libelle


VERSION
#id
ver_libelle

Associations
POSSEDE_TYPE


(entre POKEMON et TYPE)

Un Pokémon possède 1 à N types.
Un type peut être associé à 0 à N Pokémon.

Association issue de pokemon_type.

ATTAQUE_TYPE

(entre POKEMON et TYPE)

Attribut :

poka_FaibAttRes

Cardinalités :

Un Pokémon possède 0 à N relations d'attaque/résistance.
Un type intervient dans 0 à N relations.

Association issue de pokemon_attaque.

POSSEDE_TALENT

(entre POKEMON et TALENT)

Attribut :

poktal_hidden

Cardinalités :

Un Pokémon possède 1 à N talents.
Un talent peut être partagé par 0 à N Pokémon.

Association issue de pokemon_talent.

POSSEDE_STATISTIQUE

(entre POKEMON et STATISTIQUE)

Attributs :

pokstat_statpos
pokstat_statpos_libelle
pokstat_value

Cardinalités :

Un Pokémon possède 1 à N statistiques.
Une statistique concerne 0 à N Pokémon.

Association issue de pokemon_stat.

DESCRIPTION_VERSION

(entre POKEMON et VERSION)

Attribut :

pokver_localisation

Cardinalités :

Un Pokémon apparaît dans 0 à N versions.
Une version contient 0 à N Pokémon.

Association issue de pokemon_version.

Représentation textuelle du MCD
                 ┌─────────────┐
                 │   TYPE      │
                 ├─────────────┤
                 │ #id         │
                 │ typ_libelle │
                 └──────┬──────┘
                        │0,N
                        │
                        │1,N
                 ┌──────┴──────┐
                 │  POKEMON    │
                 ├─────────────┤
                 │ #id         │
                 │ pok_nom     │
                 │ pok_name    │
                 │ génération  │
                 │ taille      │
                 │ poids       │
                 └──────┬──────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        │               │               │
      1,N             1,N             0,N
        │               │               │
        │               │               │
      0,N             0,N             0,N
   ┌────┴───┐     ┌─────┴────┐     ┌────┴─────┐
   │ TALENT │     │STATISTIQUE│     │ VERSION │
   └────────┘     └──────────┘     └──────────┘


 Remarque de normalisation

Le schéma est globalement en 3FN :

pokemon contient les données principales.
type, talent, statistique et version sont correctement séparées.
Les tables pokemon_type, pokemon_talent, pokemon_stat et pokemon_version sont des associations N:N.  


Amélioration possible

La relation d'évolution serait plus propre avec une table :

EVOLUTION
---------
#id_pokemon_source
#id_pokemon_cible
type_evolution

au lieu des champs :

id_pokemon_evolution_precedente
id_pokemon_evolution_suivante

car certains Pokémon possèdent plusieurs évolutions (Évoli par exemple), ce qui n'est pas correctement représenté par deux clés étrangères simples.

C'est donc le MCD complet et cohérent déduit de votre base Pokémon normalisée.
""