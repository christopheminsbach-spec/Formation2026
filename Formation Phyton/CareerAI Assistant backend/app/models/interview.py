from typing import TYPE_CHECKING
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, Text, Integer

from app.extensions import db

if TYPE_CHECKING:
     from app.models.profile import Profile


class Interview(db.Model):

    __tablename__ = "interviews"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    question: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )


    answer: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    score: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True
    )


    feedback: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    profile_id: Mapped[int] = mapped_column(
        ForeignKey("profiles.id"),
        nullable=False
    )


    profile: Mapped["Profile"] = relationship(
        back_populates="interviews"
    )