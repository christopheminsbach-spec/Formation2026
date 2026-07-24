from typing import TYPE_CHECKING
from app.extensions import db
from sqlalchemy import Float, Text, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.profile import Profile
    from app.models.job_offer import JobOffer
    
class Matching(db.Model):

    __tablename__ = "matchings"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    score: Mapped[float] = mapped_column(
        Float
    )


    analysis: Mapped[str | None] = mapped_column(
        Text
    )


    profile_id: Mapped[int] = mapped_column(
        ForeignKey("profiles.id")
    )


    job_offer_id: Mapped[int] = mapped_column(
        ForeignKey("job_offers.id")
    )


    profile: Mapped["Profile"] = relationship(
        back_populates="matchings"
    )


    job_offer: Mapped["JobOffer"] = relationship(
        back_populates="matchings"
    )