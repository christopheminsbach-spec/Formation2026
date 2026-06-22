"""
### Exercice 3 : Abstraction

Créez une classe abstraite `Employee` avec une méthode abstraite `calculate_salary()`.

Créez ensuite :

* `PermanentEmployee`
* `Freelancer`

Utilisez les règles suivantes :

* pour `PermanentEmployee`, le salaire est toujours égal à `2000`
* pour `Freelancer`, le salaire est égal à `100 * days_worked`

`days_worked` représente le nombre de jours travaillés et doit être stocké dans l'objet `Freelancer`.

Testez ensuite vos classes en créant un objet de chaque type et en appelant la méthode `calculate_salary()`.

"""

from abc import ABC, abstractmethod

class Employee(ABC):
    @abstractmethod
    def calculate_salary(self):
        pass

class PermanentEmployee(Employee):
    def calculate_salary(self):
        return 2000
    
class Freelancer(Employee):
    def __init__(self, days_worked):
        self.days_worked = days_worked

    def calculate_salary(self):
        return 100 * self.days_worked
    
# Tests
permanent_employee = PermanentEmployee()
freelancer = Freelancer(days_worked=15)
print("Salaire de l'employé permanent :", permanent_employee.calculate_salary(), "euros")
print("Salaire du freelancer :", freelancer.calculate_salary(), "euros")
