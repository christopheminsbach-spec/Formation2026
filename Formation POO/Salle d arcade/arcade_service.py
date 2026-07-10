from database import Session
from models import Borne

class SalleArcade:

    def __init__(self):
        # Connexion à la base de données
        self.session = Session()

    TYPES = [
        "course",
        "combat",
        "puzzle",
        "tir",
        "flipper",
        "sport"
    ]

    STATUTS = [
        "disponible",
        "occupée",
        "maintenance"
    ]

    def ajouter_borne(self, nom, type_jeu, prix):
        try:
            prix = float(prix)
        except ValueError:
            print("Le prix doit être un nombre.")
            return

        if prix <= 0:
            print("Le prix doit être supérieur à 0 €.")
            return

        if type_jeu not in self.TYPES:
            print(f"Type de jeu invalide. Types autorisés : {', '.join(self.TYPES)}")
            return

        borne = Borne(
            nom=nom,
            type_jeu=type_jeu,
            prix=prix
        )

        self.session.add(borne)
        self.session.commit()

        print("Borne ajoutée avec succès.")

    def afficher_bornes(self):

        bornes = self.session.query(Borne).all()

        if not bornes:
            print("Aucune borne.")
            return

        for borne in bornes:
            print(borne)

    def afficher_disponibles(self):

        bornes = self.session.query(Borne).filter_by(
            statut="disponible"
        )

        for borne in bornes:
            print(borne)

    def lancer_partie(self, id_borne):

        borne = self.session.get(Borne, id_borne)

        if borne is None:
            print("Borne introuvable.")
            return

        if borne.statut != "disponible":
            print("La borne est indisponible.")
            return

        borne.statut = "occupée"

        self.session.commit()

        print("Partie lancée.")

    def terminer_partie(self, id_borne):

        borne = self.session.get(Borne, id_borne)

        if borne is None:
            print("Borne introuvable.")
            return

        if borne.statut != "occupée":
            print("La borne n'est pas occupée.")
            return

        borne.statut = "disponible"
        borne.nb_parties += 1
        borne.chiffre_affaires += borne.prix

        self.session.commit()

        print("Partie terminée.")

    def maintenance(self, id_borne):

        borne = self.session.get(Borne, id_borne)

        if borne is None:
            print("Borne introuvable.")
            return

        borne.statut = "maintenance"

        self.session.commit()

        print("Borne mise en maintenance.")

    def statistiques(self):

        bornes = self.session.query(Borne).all()

        total = len(bornes)

        disponibles = len(
            [b for b in bornes if b.statut == "disponible"]
        )

        occupees = len(
            [b for b in bornes if b.statut == "occupée"]
        )

        maintenance = len(
            [b for b in bornes if b.statut == "maintenance"]
        )

        parties = sum(b.nb_parties for b in bornes)

        ca = sum(b.chiffre_affaires for b in bornes)

        print("\n===== STATISTIQUES =====")
        print("Nombre de bornes :", total)
        print("Disponibles :", disponibles)
        print("Occupées :", occupees)
        print("Maintenance :", maintenance)
        print("Parties jouées :", parties)
        print("Chiffre d'affaires :", ca, "€")