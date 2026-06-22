"""
### Exercice 4 : Polymorphisme

Créez trois classes :

* `Piano`
* `Guitar`
* `Drums`

Chaque classe doit avoir une méthode `play()` qui affiche le son de l'instrument.

Placez ensuite plusieurs objets dans une liste et appelez `play()` dans une boucle.
"""
class Piano:
    def play(self):
        print("Le piano joue : Plink plonk!")
class Guitar:
    def play(self):
        print("La guitare joue : Strum strum!")
class Drums:
    def play(self):
        print("La batterie joue : Boom boom!")

# Tests
piano = Piano()
guitar = Guitar()
drums = Drums()

instruments = [piano, guitar, drums]

for instrument in instruments:
    instrument.play()   
    