
from datetime import datetime
from typing import TYPE_CHECKING

from app.extensions import db
from sqlalchemy import Boolean, DateTime, String
from sqlalchemy.orm import Mapped, mapped_column, relationship


if TYPE_CHECKING:
    from app.models.application import Application
    from app.models.document import Document
    from app.models.interview import Interview
    from app.models.matching import Matching
    from app.models.profile import Profile


class User(db.Model):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(
        primary_key=True
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    password_hash: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    first_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    last_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    role: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
        default="user",
    )

    is_active: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        default=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        default=datetime.utcnow,
    )

    # ─────────────────────────────────────────────
    # Profil utilisateur
    # ─────────────────────────────────────────────

    profile: Mapped["Profile | None"] = relationship(
        "Profile",
        back_populates="user",
        uselist=False,
        cascade="all, delete-orphan",
    )

    # ─────────────────────────────────────────────
    # Candidatures
    # ─────────────────────────────────────────────

    applications: Mapped[list["Application"]] = relationship(
        "Application",
        back_populates="user",
        cascade="all, delete-orphan",
    )

    # ─────────────────────────────────────────────
    # Documents
    # ─────────────────────────────────────────────

    documents: Mapped[list["Document"]] = relationship(
        "Document",
        back_populates="user",
        cascade="all, delete-orphan",
    )

    # ─────────────────────────────────────────────
    # Entretiens IA
    # ─────────────────────────────────────────────

    interviews: Mapped[list["Interview"]] = relationship(
        "Interview",
        back_populates="user",
        cascade="all, delete-orphan",
    )

    # ─────────────────────────────────────────────
    # Matching IA
    # ─────────────────────────────────────────────

    matchings: Mapped[list["Matching"]] = relationship(
        "Matching",
        back_populates="user",
        cascade="all, delete-orphan",
    )

    def __repr__(self) -> str:
        return (
            f"<User id={self.id} "
            f"email='{self.email}'>"
        )

