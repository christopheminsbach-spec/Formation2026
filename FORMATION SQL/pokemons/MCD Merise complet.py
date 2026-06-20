""
Entités
POKEMON
#id_pokemon
nom_fr
nom_en
image_online
generation
taille
poids
percent_male
percent_female

TYPE
#id_type
libelle

TALENT
#id_talent
libelle
STATISTIQUE
#id_statistique
libelle
VERSION
#id_version
libelle

Associations
1. EST_DE_TYPE

Association entre POKEMON et TYPE

Cardinalités :

POKEMON (1,N) ───── EST_DE_TYPE ───── (0,N) TYPE

Attribut : aucun

2. POSSEDE_TALENT

Association entre POKEMON et TALENT

Cardinalités :

POKEMON (1,N) ───── POSSEDE_TALENT ───── (0,N) TALENT
                          |
                          └── hidden

Attribut :

hidden

3. POSSEDE_STATISTIQUE

Association entre POKEMON et STATISTIQUE

Cardinalités :

POKEMON (1,N) ─── POSSEDE_STATISTIQUE ─── (0,N) STATISTIQUE
                           |
                           ├── valeur
                           ├── position
                           └── libelle_position

Attributs :

valeur
position
libelle_position
4. APPARAIT_DANS

Association entre POKEMON et VERSION

Cardinalités :

POKEMON (0,N) ───── APPARAIT_DANS ───── (0,N) VERSION
                           |
                           └── localisation

Attribut :

localisation


5. EFFICACITE_TYPE

Association entre POKEMON et TYPE

Cardinalités :

POKEMON (0,N) ───── EFFICACITE_TYPE ───── (0,N) TYPE
                           |
                           └── nature_relation

Attribut :

nature_relation

Valeurs possibles :

Faiblesse
Résistance
Immunité
Attaque
6. EVOLUTION

Association réflexive sur POKEMON

Cardinalités :

POKEMON (0,1)
      │
      │ EVOLUTION
      │
POKEMON (0,1)

Attribut : aucun

MCD MERISE COMPLET
                                  TYPE
                                   |
                               (0,N)
                                   |
                             EST_DE_TYPE
                                   |
                               (1,N)
                                   |
                                   |
┌──────────────────────────────────────────┐
│                 POKEMON                  │
├──────────────────────────────────────────┤
│ #id_pokemon                              │
│ nom_fr                                   │
│ nom_en                                   │
│ image_online                             │
│ generation                               │
│ taille                                   │
│ poids                                    │
│ percent_male                             │
│ percent_female                           │
└──────────────────────────────────────────┘
        |                    |                    |
     (1,N)                (1,N)                (0,N)
        |                    |                    |
        |                    |                    |
POSSEDE_TALENT      POSSEDE_STATISTIQUE    APPARAIT_DANS
        |                    |                    |
      (0,N)               (0,N)               (0,N)
        |                    |                    |
     TALENT             STATISTIQUE           VERSION

Association POSSEDE_TALENT
--------------------------
hidden

Association POSSEDE_STATISTIQUE
-------------------------------
valeur
position
libelle_position

Association APPARAIT_DANS
-------------------------
localisation


┌──────────────────────────────────────────┐
│                 POKEMON                  │
└──────────────────────────────────────────┘
                  |
               (0,N)
                  |
            EFFICACITE_TYPE
                  |
               (0,N)
                  |
                 TYPE

Attribut :
-----------
nature_relation


┌──────────────────────────────────────────┐
│                 POKEMON                  │
└──────────────────────────────────────────┘
               (0,1)
                  |
              EVOLUTION
                  |
               (0,1)
┌──────────────────────────────────────────┐
│                 POKEMON                  │
└──────────────────────────────────────────┘
""