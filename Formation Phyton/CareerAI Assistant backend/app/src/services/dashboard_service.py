from sqlalchemy import select, func

from app.extensions import db

from app.models.user import User
from app.models.profile import Profile
from app.models.application import Application
from app.models.document import Document
from app.models.interview import Interview
from app.models.matching import Matching
from app.models.Skill import Skill



def get_dashboard_data(user_id):


    user = db.session.execute(
        select(User)
        .where(User.id == user_id)
    ).scalar_one_or_none()



    if not user:

        return {
            "error": "Utilisateur introuvable"
        }



    profile = user.profile



    skills_count = len(
        profile.skills
    ) if profile else 0



    documents_count = len(
        profile.documents
    ) if profile else 0



    applications_count = len(
        profile.applications
    ) if profile else 0



    interviews_count = len(
        profile.interviews
    ) if profile else 0



    matchings = []

    if profile:

        matchings = [
            {
                "job_offer_id": m.job_offer_id,
                "score": m.score,
                "analysis": m.analysis
            }

            for m in profile.matchings
        ]



    return {


        "user": {

            "id": user.id,

            "email": user.email,

            "role": user.role

        },


        "profile": {

            "firstname": profile.firstname
            if profile else None,


            "lastname": profile.lastname
            if profile else None

        },


        "statistics": {


            "skills": skills_count,


            "documents": documents_count,


            "applications": applications_count,


            "interviews": interviews_count


        },


        "matching": matchings

    }