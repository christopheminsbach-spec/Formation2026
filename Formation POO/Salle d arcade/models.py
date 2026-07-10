from sqlalchemy import Column, Integer, String, Float, CheckConstraint
from database import Base

class Borne(Base):
    __tablename__ = "bornes"

    id = Column(Integer, primary_key=True)

    nom = Column(String(50), nullable=False, unique=True)

    type_jeu = Column(String(20), nullable=False)

    prix = Column(Float, nullable=False)

    statut = Column(String(20), default="disponible")

    nb_parties = Column(Integer, default=0)

    chiffre_affaires = Column(Float, default=0)

    __table_args__ = (
        CheckConstraint("prix > 0", name="check_prix_positif"),
    )