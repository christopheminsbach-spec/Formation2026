from __future__ import annotations

from typing import TYPE_CHECKING

from datetime import datetime

from sqlalchemy import ForeignKey, String, Text, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.extensions import db


if TYPE_CHECKING:
    from app.models.user import User
    from app.models.job_offer import JobOffer


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
        String(50),
        default="pending",
        nullable=False
    )


    message: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    applied_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )


    user: Mapped["User"] = relationship(
        back_populates="applications"
    )


    job_offer: Mapped["JobOffer"] = relationship(
        back_populates="applications"
    )


    def __repr__(self) -> str:

        return (
            f"<Application id={self.id} "
            f"status='{self.status}'>"
        )