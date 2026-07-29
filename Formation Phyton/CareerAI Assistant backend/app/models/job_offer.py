from __future__ import annotations

from typing import TYPE_CHECKING

from datetime import datetime

from sqlalchemy import ForeignKey, String, Text, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.extensions import db


if TYPE_CHECKING:
    from app.models.application import Application
    from app.models.company import Company
    from app.models.matching import Matching
    from app.models.skill import Skill


class JobOffer(db.Model):

    __tablename__ = "job_offers"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    title: Mapped[str] = mapped_column(
        String(150),
        nullable=False
    )


    description: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )


    company_id: Mapped[int] = mapped_column(
        ForeignKey("companies.id"),
        nullable=False
    )


    company: Mapped["Company"] = relationship(
        back_populates="job_offers"
    )


    applications: Mapped[list["Application"]] = relationship(
        back_populates="job_offer",
        cascade="all, delete-orphan"
    )


    matchings: Mapped[list["Matching"]] = relationship(
        back_populates="job_offer",
        cascade="all, delete-orphan"
    )


    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        default=datetime.utcnow
    )

    skills: Mapped[list["Skill"]] = relationship(
    secondary="job_offer_skill",
    back_populates="job_offers"
    )


    def __repr__(self) -> str:
        return (
            f"<JobOffer id={self.id} "
            f"title='{self.title}'>"
        )