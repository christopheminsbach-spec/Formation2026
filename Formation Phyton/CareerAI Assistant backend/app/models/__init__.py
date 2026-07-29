
from app.models.user import User
from app.models.profile import Profile
from app.models.application import Application
from app.models.document import Document
from app.models.skill import Skill
from app.models.interview import Interview
from app.models.company import Company
from app.models.job_offer import JobOffer
from app.models.matching import Matching

# Table d'association many-to-many
from app.models.job_offer_skill import job_offer_skill


__all__ = [
    "User",
    "Profile",
    "Application",
    "Document",
    "Skill",
    "Interview",
    "Company",
    "JobOffer",
    "Matching",
    "job_offer_skill",
]
