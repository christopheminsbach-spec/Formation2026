from typing import TYPE_CHECKING
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, String

from app.extensions import db
if TYPE_CHECKING:
    from app.models.profile import Profile

class Document(db.Model):

    __tablename__ = "documents"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    filename: Mapped[str] = mapped_column(
        String(255)
    )


    file_type: Mapped[str] = mapped_column(
        String(50)
    )


    path: Mapped[str] = mapped_column(
        String(255)
    )


    profile_id: Mapped[int] = mapped_column(
        ForeignKey("profiles.id")
    )


    profile: Mapped["Profile"] = relationship(
        back_populates="documents"
    )