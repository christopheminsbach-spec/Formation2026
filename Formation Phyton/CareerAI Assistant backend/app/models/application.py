
from __future__ import annotations

from datetime import datetime
from typing import TYPE_CHECKING

from app.extensions import db
from sqlalchemy import DateTime, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship


if TYPE_CHECKING:
    from app.models.job_offer import JobOffer
    from app.models.user import User


class Application(db.Model):
    __tablename__ = "applications"

    id: Mapped[int] = mapped_column(
        primary_key=True
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    job_offer_id: Mapped[int] = mapped_column(
        ForeignKey("job_offers.id"),
        nullable=False,
    )

    status: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
        default="pending",
    )

    applied_at: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        default=datetime.utcnow,
    )

    message: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    user: Mapped["User"] = relationship(
        "User",
        back_populates="applications",
    )

    job_offer: Mapped["JobOffer"] = relationship(
        "JobOffer",
        back_populates="applications",
    )

    def __repr__(self) -> str:
        return (
            f"<Application id={self.id} "
            f"user_id={self.user_id} "
            f"job_offer_id={self.job_offer_id}>"
        )

