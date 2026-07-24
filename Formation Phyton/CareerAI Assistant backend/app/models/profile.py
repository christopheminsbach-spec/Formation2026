from typing import TYPE_CHECKING
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, ForeignKey, Text

from app.extensions import db


if TYPE_CHECKING:
    from app.models.application import Application
    from app.models.document import Document
    from app.models.interview import Interview
    from app.models.matching import Matching
    from app.models.Skill import Skill
    from app.models.user import User

class Profile(db.Model):

    __tablename__ = "profiles"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    firstname: Mapped[str] = mapped_column(
        String(80)
    )


    lastname: Mapped[str] = mapped_column(
        String(80)
    )


    bio: Mapped[str | None] = mapped_column(
        Text
    )


    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        unique=True
    )


    user: Mapped["User"] = relationship(
        back_populates="profile"
    )


    documents: Mapped[list["Document"]] = relationship(
        back_populates="profile",
        cascade="all, delete-orphan"
    )


    interviews: Mapped[list["Interview"]] = relationship(
    back_populates="profile",
    cascade="all, delete-orphan"
    )  


    applications: Mapped[list["Application"]] = relationship(
    back_populates="profile",
    cascade="all, delete-orphan"
    )


    skills: Mapped[list["Skill"]] = relationship(
        secondary="profile_skills",
        back_populates="profiles"
    )


    matchings: Mapped[list["Matching"]] = relationship(
        back_populates="profile",
        cascade="all, delete-orphan"
    )