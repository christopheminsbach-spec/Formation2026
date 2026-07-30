from app.extensions import db
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey


class Application(db.Model):

    __tablename__ = "applications"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False
    )


    job_offer_id: Mapped[int] = mapped_column(
        ForeignKey("job_offers.id"),
        nullable=False
    )


    status: Mapped[str] = mapped_column(
        default="Envoyée"
    )


    user = relationship(
        "User",
        back_populates="applications"
    )


    job_offer = relationship(
        "JobOffer",
        back_populates="applications"
    )