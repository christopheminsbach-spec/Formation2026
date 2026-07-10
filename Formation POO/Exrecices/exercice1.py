"""
### Exercice 1 : Encapsulation

Créez une classe `MoneyBox` avec :

* un attribut `_amount`
* une méthode `deposit(amount)`
* une méthode `get_amount()`

Testez votre classe.

"""

class MoneyBox:
    def __init__(self):
        self.amount = 0

    def deposit(self, amount):
        if amount > 0:
            self.amount += amount
        else:
            print("Le montant doit être positif.")

    def get_amount(self):
        return self.amount

# Tests

box = MoneyBox()

box.deposit(50)
box.deposit(25)

print("Montant actuel :", box.get_amount())

box.deposit(-10)
  




