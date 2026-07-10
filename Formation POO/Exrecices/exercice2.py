"""
### Exercice 2 : Héritage

Créez une classe `Vehicle` avec :

* un attribut `brand`
* une méthode `display_info()` qui affiche la marque du véhicule

Créez ensuite :

* une classe `Car` qui hérite de `Vehicle`
* une classe `Motorcycle` qui hérite de `Vehicle`

Ajoutez à chaque classe enfant une méthode spécifique de votre choix (ex. `wheelie()` ou `honk()`).

Testez ensuite vos classes en créant un objet de chaque type et en appelant leurs méthodes.
"""

class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def display_info(self):
        print(f"Marque du véhicule : {self.brand}")

class Car(Vehicle):
    def honk(self):
        print("La voiture klaxonne : Beep beep!")

class Motorcycle(Vehicle):
    def wheelie(self):
        print("La moto fait un wheeling !")

# Tests
car = Car("Renault")
motorcycle = Motorcycle("Harley-Davidson")
car.display_info()
car.honk()
motorcycle.display_info()
motorcycle.wheelie()

