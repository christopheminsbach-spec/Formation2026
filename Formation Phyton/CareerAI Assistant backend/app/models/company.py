from typing import TYPE_CHECKING
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.extensions import db
class Company(db.Model):

    if TYPE_CHECKING:
     from app.models.job_offer import JobOffer

    __tablename__ = "companies"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    name: Mapped[str] = mapped_column(
        String(120)
    )


    sector: Mapped[str | None] = mapped_column(String(120), nullable=True)


    location: Mapped[str | None] = mapped_column(String(120), nullable=True)


    job_offers: Mapped[list["JobOffer"]] = relationship(
        back_populates="company"
    )