
from __future__ import annotations

from typing import TYPE_CHECKING

from app.extensions import db
from sqlalchemy import ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship


if TYPE_CHECKING:
    from app.models.user import User


class Profile(db.Model):
    __tablename__ = "profiles"

    id: Mapped[int] = mapped_column(
        primary_key=True
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        unique=True,
        nullable=False,
    )

    first_name: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    last_name: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    phone: Mapped[str | None] = mapped_column(
        String(30),
        nullable=True,
    )

    years_experience: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True,
    )

    education: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    github_url: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    linkedin_url: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    bio: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    portfolio_url: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    location: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    user: Mapped["User"] = relationship(
        "User",
        back_populates="profile",
    )

    def __repr__(self) -> str:
        return (
            f"<Profile id={self.id} "
            f"user_id={self.user_id}>"
        )

