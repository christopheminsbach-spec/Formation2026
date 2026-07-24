from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Table, Column, ForeignKey
from typing import TYPE_CHECKING

from app.extensions import db

if TYPE_CHECKING:
    from app.models.profile import Profile


profile_skills = Table(

    "profile_skills",

    db.metadata,

    Column(
        "profile_id",
        ForeignKey("profiles.id"),
        primary_key=True
    ),

    Column(
        "skill_id",
        ForeignKey("skills.id"),
        primary_key=True
    )
)



class Skill(db.Model):

    __tablename__ = "skills"


    id: Mapped[int] = mapped_column(
        primary_key=True
    )


    name: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        nullable=False
    )


    profiles: Mapped[list["Profile"]] = relationship(
        secondary=profile_skills,
        back_populates="skills"
    )