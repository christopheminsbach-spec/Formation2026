from __future__ import annotations

from typing import TYPE_CHECKING

from datetime import datetime

from sqlalchemy import ForeignKey, String, Text, DateTime, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.extensions import db


if TYPE_CHECKING:
    from app.models.user import User


class Interview(db.Model):

    __tablename__ = "interviews"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False
    )


    title: Mapped[str] = mapped_column(
        String(150),
        nullable=False
    )


    interview_type: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
        default="technical"
    )


    question: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )


    answer: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    ai_feedback: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    score: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True
    )


    duration: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True
    )


    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )


    user: Mapped["User"] = relationship(
    "User",
    back_populates="interviews",
    )


    def __repr__(self) -> str:

        return (
            f"<Interview id={self.id} "
            f"title='{self.title}'>"
        )