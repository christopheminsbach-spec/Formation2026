from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String
from typing import TYPE_CHECKING

from app.extensions import db

if TYPE_CHECKING:
    from app.models.profile import Profile


class User(db.Model):

    __tablename__ = "users"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    email: Mapped[str] = mapped_column(
        String(120),
        unique=True,
        nullable=False
    )


    password_hash: Mapped[str] = mapped_column(
        nullable=False
    )


    role: Mapped[str] = mapped_column(
        String(30),
        default="USER"
    )


    profile: Mapped["Profile"] = relationship(
        back_populates="user",
        cascade="all, delete-orphan",
        uselist=False
    )