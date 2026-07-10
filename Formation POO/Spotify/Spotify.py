
import csv
from collections import Counter


class SpotifyUser:
    """
    Représente un utilisateur Spotify.
    """

    def __init__(self, data):
        self.user_id = int(data["user_id"])
        self.gender = data["gender"]
        self.age = int(data["age"])
        self.country = data["country"]
        self.subscription_type = data["subscription_type"]
        self.listening_time = float(data["listening_time"])
        self.songs_played_per_day = int(data["songs_played_per_day"])
        self.skip_rate = float(data["skip_rate"])
        self.device_type = data["device_type"]
        self.ads_listened_per_week = int(data["ads_listened_per_week"])
        self.offline_listening = bool(int(data["offline_listening"]))
        self.is_churned = bool(int(data["is_churned"]))

    # --------------------------
    # Méthodes métier
    # --------------------------

    def is_fan(self):
        return (
            self.listening_time >= 300
            and self.songs_played_per_day >= 40
        )

    def is_quiet_user(self):
        return self.listening_time < 120

    def is_risk(self):
        return self.is_churned

    def premium_candidate(self):
        return (
            self.subscription_type == "Free"
            and self.ads_listened_per_week > 5
            and self.listening_time >= 180
        )

    def marketing_profile(self):
        return (
            self.listening_time >= 240
            and self.songs_played_per_day >= 30
        )


class SpotifyAnalyzer:
    """
    Analyse les utilisateurs Spotify.
    """

    def __init__(self, filename):
        self.users = []

        with open(filename, newline="", encoding="utf-8") as file:
            reader = csv.DictReader(file)

            for row in reader:
                self.users.append(SpotifyUser(row))

    # --------------------------
    # Statistiques générales
    # --------------------------

    def nb_users(self):
        return len(self.users)

    def average_age(self):
        return sum(u.age for u in self.users) / len(self.users)

    def average_listening_time(self):
        return sum(u.listening_time for u in self.users) / len(self.users)

    def average_songs(self):
        return sum(u.songs_played_per_day for u in self.users) / len(self.users)

    def churn_rate(self):
        return (
            sum(u.is_churned for u in self.users)
            / len(self.users)
            * 100
        )

    # --------------------------
    # Analyses
    # --------------------------

    def most_popular_subscription(self):
        subscriptions = [u.subscription_type for u in self.users]
        return Counter(subscriptions).most_common(1)[0]

    def most_used_device(self):
        devices = [u.device_type for u in self.users]
        return Counter(devices).most_common(1)[0]

    def nb_fans(self):
        return sum(u.is_fan() for u in self.users)

    def nb_quiet_users(self):
        return sum(u.is_quiet_user() for u in self.users)

    def nb_risk_users(self):
        return sum(u.is_risk() for u in self.users)

    def nb_premium_candidates(self):
        return sum(u.premium_candidate() for u in self.users)

    def nb_marketing_profiles(self):
        return sum(u.marketing_profile() for u in self.users)

    # --------------------------
    # Rapport
    # --------------------------

    def report(self):

        print("=" * 60)
        print("           SPOTIFY ANALYZER")
        print("=" * 60)

        print(f"Nombre d'utilisateurs : {self.nb_users()}")
        print(f"Âge moyen : {self.average_age():.1f} ans")
        print(f"Temps d'écoute moyen : {self.average_listening_time():.1f} minutes")
        print(f"Chansons jouées / jour : {self.average_songs():.1f}")
        print(f"Taux de churn : {self.churn_rate():.2f}%")

        subscription, nb = self.most_popular_subscription()
        print(f"Abonnement le plus utilisé : {subscription} ({nb})")

        device, nb = self.most_used_device()
        print(f"Appareil le plus utilisé : {device} ({nb})")

        print("-" * 60)

        print(f"Fans absolus : {self.nb_fans()}")
        print(f"Utilisateurs calmes : {self.nb_quiet_users()}")
        print(f"Utilisateurs à risque : {self.nb_risk_users()}")
        print(f"Candidats Premium : {self.nb_premium_candidates()}")
        print(f"Profils marketing : {self.nb_marketing_profiles()}")

        print("=" * 60)


def main():
    analyzer = SpotifyAnalyzer("spotify_dataset.csv")
    analyzer.report()


if __name__ == "__main__":
    main()

