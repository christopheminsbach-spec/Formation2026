from __future__ import annotations

from typing import TYPE_CHECKING

from datetime import datetime

from sqlalchemy import (
    ForeignKey,
    Float,
    Text,
    DateTime
)

from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.extensions import db


if TYPE_CHECKING:
    from app.models.user import User
    from app.models.job_offer import JobOffer


class Matching(db.Model):

    __tablename__ = "matchings"


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


    score: Mapped[float] = mapped_column(
        Float,
        nullable=False,
        default=0.0
    )


    skills_match: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    ai_analysis: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    recommendations: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )


    user: Mapped["User"] = relationship(
    "User",
    back_populates="matchings",
    )

    job_offer: Mapped["JobOffer"] = relationship(
    "JobOffer",
    back_populates="matchings",
    )


    def __repr__(self) -> str:

        return (
            f"<Matching id={self.id} "
            f"score={self.score}%>"
        )