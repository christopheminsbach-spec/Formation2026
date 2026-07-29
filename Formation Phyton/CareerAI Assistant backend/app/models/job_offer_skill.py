from sqlalchemy import Table, Column, ForeignKey

from app.extensions import db

job_offer_skill = Table(
    "job_offer_skill",
    db.metadata,

    Column(
        "job_offer_id",
        ForeignKey("job_offers.id", ondelete="CASCADE"),
        primary_key=True,
    ),

    Column(
        "skill_id",
        ForeignKey("skills.id", ondelete="CASCADE"),
        primary_key=True,
    ),
)