from __future__ import annotations

from typing import TYPE_CHECKING

from sqlalchemy import String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.extensions import db


if TYPE_CHECKING:
    from app.models.job_offer import JobOffer


class Company(db.Model):

    __tablename__ = "companies"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    name: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
        index=True
    )


    sector: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True
    )


    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    website: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )


    email: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )


    phone: Mapped[str | None] = mapped_column(
        String(30),
        nullable=True
    )


    address: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )


    city: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True
    )


    country: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True
    )


    job_offers: Mapped[list["JobOffer"]] = relationship(
        back_populates="company",
        cascade="all, delete-orphan"
    )


    def __repr__(self) -> str:

        return (
            f"<Company id={self.id} "
            f"name='{self.name}'>"
        )