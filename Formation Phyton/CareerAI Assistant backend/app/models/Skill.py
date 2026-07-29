from __future__ import annotations

from typing import TYPE_CHECKING

from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.extensions import db


if TYPE_CHECKING:
    from app.models.job_offer import JobOffer


class Skill(db.Model):

    __tablename__ = "skills"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    name: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False,
        index=True
    )


    category: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True
    )


    job_offers: Mapped[list["JobOffer"]] = relationship(
        secondary="job_offer_skill",
        back_populates="skills"
    )


    def __repr__(self) -> str:
        return (
            f"<Skill id={self.id} "
            f"name='{self.name}'>"
        )