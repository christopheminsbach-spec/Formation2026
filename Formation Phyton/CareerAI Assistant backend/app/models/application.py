from typing import TYPE_CHECKING
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, String

from app.extensions import db

if TYPE_CHECKING:
     from app.models.job_offer import JobOffer
     from app.models.profile import Profile


class Application(db.Model):

    __tablename__ = "applications"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    status: Mapped[str] = mapped_column(
        String(50),
        default="ENVOYEE"
    )


    profile_id: Mapped[int] = mapped_column(
        ForeignKey("profiles.id")
    )


    job_offer_id: Mapped[int] = mapped_column(
        ForeignKey("job_offers.id")
    )


    profile: Mapped["Profile"] = relationship(
        back_populates="applications"
    )


    job_offer: Mapped["JobOffer"] = relationship(
        back_populates="applications"
    )