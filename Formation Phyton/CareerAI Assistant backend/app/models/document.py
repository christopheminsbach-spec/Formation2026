from __future__ import annotations

from typing import TYPE_CHECKING

from datetime import datetime

from sqlalchemy import ForeignKey, String, Text, DateTime, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.extensions import db


if TYPE_CHECKING:
    from app.models.user import User


class Document(db.Model):

    __tablename__ = "documents"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False
    )


    name: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )


    file_path: Mapped[str] = mapped_column(
        String(500),
        nullable=False
    )


    document_type: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )


    content: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    ai_analysis: Mapped[str | None] = mapped_column(
        Text,
        nullable=True
    )


    is_analyzed: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False
    )


    uploaded_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )


    user: Mapped["User"] = relationship(
        back_populates="documents"
    )


    def __repr__(self) -> str:

        return (
            f"<Document id={self.id} "
            f"name='{self.name}'>"
        )