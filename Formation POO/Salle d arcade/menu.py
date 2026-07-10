from arcade_service import SalleArcade


class Menu:

    TYPES = [
        "course",
        "combat",
        "puzzle",
        "tir",
        "flipper",
        "sport"
    ]

    def __init__(self):
        self.arcade = SalleArcade()

    def lancer(self):

        while True:

            print("""
1. Ajouter une borne
2. Bornes disponibles
3. Toutes les bornes
4. Lancer une partie
5. Terminer une partie
6. Maintenance
7. Statistiques
8. Quitter
""")

            choix = input("Choix : ").strip()

            match choix:

                case "1":

                    while True:
                        nom = input("Nom de la borne : ").strip()

                        if nom:
                            break

                        print("❌ Le nom ne peut pas être vide.")

                    while True:

                        type_jeu = input(
                            "Type (course, combat, puzzle, tir, flipper, sport) : "
                        ).strip().lower()

                        if type_jeu in self.TYPES:
                            break

                        print("❌ Type de jeu invalide.")

                    while True:

                        try:
                            prix = float(input("Prix de la partie (€) : "))

                            if prix <= 0:
                                print("❌ Le prix doit être supérieur à 0 €.")
                                continue

                            break

                        except ValueError:
                            print("❌ Veuillez saisir un nombre valide.")

                    self.arcade.ajouter_borne(nom, type_jeu, prix)

                case "2":

                    self.arcade.afficher_disponibles()

                case "3":

                    self.arcade.afficher_bornes()

                case "4":

                    try:
                        id_borne = int(input("ID : "))
                        self.arcade.lancer_partie(id_borne)
                    except ValueError:
                        print("❌ L'ID doit être un nombre entier.")

                case "5":

                    try:
                        id_borne = int(input("ID : "))
                        self.arcade.terminer_partie(id_borne)
                    except ValueError:
                        print("❌ L'ID doit être un nombre entier.")

                case "6":

                    try:
                        id_borne = int(input("ID : "))
                        self.arcade.maintenance(id_borne)
                    except ValueError:
                        print("❌ L'ID doit être un nombre entier.")

                case "7":

                    self.arcade.statistiques()

                case "8":

                    print("Au revoir !")
                    break

                case _:

                    print("❌ Choix invalide.")