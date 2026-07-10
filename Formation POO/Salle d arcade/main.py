from database import Base, engine
from menu import Menu

Base.metadata.create_all(engine)

menu = Menu()
menu.lancer()