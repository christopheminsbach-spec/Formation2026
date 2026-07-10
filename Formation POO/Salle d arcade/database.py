from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

DATABASE_URL = "sqlite:///arcade.db"

engine = create_engine(
    DATABASE_URL,
    echo=True
)

from sqlalchemy import text

Session = sessionmaker(bind=engine)

Base = declarative_base()

sql = text("SELECT * FROM bornes WHERE nom = :nom")
# resultat = session.execute(sql, {"nom": nom})

Base = declarative_base()