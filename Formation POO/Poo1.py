# On définit une classe appelée Car
class Car:
    pass # On laisse la classe vide pour l'instant.

# On crée deux instances de cette classe
car_1 = Car()
car_2 = Car()

# Est-ce que ce sont les mêmes objets ?
print("Mêmes objets ?", car_1 == car_2)

# Est-ce qu'ils ont été créés à partir de la même classe ?
print("Même classe ?", type(car_1) == type(car_2))

########################--------------------------############################

# On utilise toujours notre classe Car
class Car:
  # On définit une méthode qui s'appelle __init__
  def __init__(self, brand, color):
    # On remplit les valeurs de la classe
    self.brand = brand
    self.color = color

# On instancie les objets en spécifiant les paramètre dans l'ordre
# où ils ont été définis.
car_1 = Car("Renault", "rouge")
car_2 = Car("Tesla", "noire")

# Testons les accès !
print(f"- Marque de la voiture 1 : {car_1.brand}")
print(f"- Couleur de la voiture 1 : {car_1.color}")
print(f"- Marque de la voiture 2 :{car_2.brand}")

########################--------------------------############################

# On utilise toujours notre classe Car
class Car:
  # On définit une méthode qui s'appelle __init__
  def __init__(self, brand, color):
    # On remplit les valeurs de la classe
    self.brand = brand
    self.color = color

# On instancie les objets en spécifiant les paramètre dans l'ordre
# où ils ont été définis.
car_1 = Car("Renault", "rouge")
car_2 = Car("Tesla", "noire")

# Testons les accès !
print(f"- Marque de la voiture 1 : {car_1.brand}")
print(f"- Couleur de la voiture 1 : {car_1.color}")
print(f"- Marque de la voiture 2 :{car_2.brand}")

########################--------------------------############################

# On utilise toujours notre classe Car
class Car:
  # On définit une méthode qui s'appelle __init__
  def __init__(self):
    # On remplit les valeurs de la classe
    self.kilometers = 0

  # On définit une méthode pour augmenter le compteur kilométrique
  def drive(self, kms: int):
    self.kilometers += kms

# On instancie les objets en spécifiant les paramètre dans l'ordre
# où ils ont été définis.
my_supercar = Car()

print(f"Compteur kilométrique avant mon trajet : {my_supercar.kilometers}")
my_supercar.drive(450)
print(f"Compteur kilométrique à la pause sur l'aire d'autoroute : {my_supercar.kilometers}")
my_supercar.drive(856)
print(f"Compteur kilométrique à la fin du trajet : {my_supercar.kilometers}")

########################--------------------------############################

# On utilise toujours notre classe Car
class Car:
  # On définit une méthode qui s'appelle __init__
  def __init__(self, model):
    # On remplit les valeurs de la classe
    self.kilometers = 0
    self.model = model

  # On définit une méthode pour augmenter le compteur kilométrique
  def drive(self, kms: int):
    self.kilometers += kms

car_1 = Car("Tesla Model 3")
car_2 = Car("Peugeot 3008")

# Les deux voitures roulent...
car_1.drive(155)
car_1.drive(300)
car_2.drive(10)
car_1.drive(685)
car_2.drive(40)

print(f"La voiture '{car_1.model}' a roulé {car_1.kilometers}km")
print(f"La voiture '{car_2.model}' a roulé {car_2.kilometers}km")

########################--------------------------############################

# On définit une classe pour gérer un compte bancaire
class BankAccount:
  def __init__(self, owner, balance):
    self.owner = owner
    self.balance = balance

  def deposit(self, amount):
    self.balance = self.balance + amount

  def withdraw(self, amount):
    self.balance = self.balance - amount

  def display_balance(self):
    print("Owner:", self.owner)
    print("Balance:", self.balance, "euros")

account = BankAccount("Nicolas", 100)
account.deposit(1500)
account.withdraw(500)
account.display_balance()

########################--------------------------############################

#### Exercice 1 : Un Livre

#Créez une classe représentant un livre avec :
#- un titre
#- un auteur

#Puis créez deux objets et affichez leurs données.

