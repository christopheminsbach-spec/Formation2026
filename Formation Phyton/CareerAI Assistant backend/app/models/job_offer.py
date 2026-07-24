from typing import TYPE_CHECKING
from app.extensions import db
from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

class JobOffer(db.Model):
    if TYPE_CHECKING:
     from app.models.company import Company
     from app.models.document import Document
     from app.models.application import Application
     from app.models.matching import Matching
     from app.models.Skill import Skill
     from app.models.user import User

    __tablename__ = "job_offers"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    title: Mapped[str] = mapped_column(
        String(150)
    )


    description: Mapped[str]


    company_id: Mapped[int] = mapped_column(
        ForeignKey("companies.id")
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