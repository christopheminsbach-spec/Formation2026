from flask_jwt_extended import get_jwt_identity

from app.models.user import User
from app.models.application import Application
from app.models.document import Document
from app.models.matching import Matching
from app.models.interview import Interview


class DashboardService:


    @staticmethod
    def get_dashboard():

        user_id = int(get_jwt_identity())


        user = User.query.get(user_id)


        if not user:

            return {
                "message": "Utilisateur introuvable"
            }, 404



        applications = Application.query.filter_by(
            user_id=user.id
        ).count()


        documents = Document.query.filter_by(
            user_id=user.id
        ).count()


        matches = Matching.query.filter_by(
            user_id=user.id
        ).count()


        interviews = Interview.query.filter_by(
            user_id=user.id
        ).count()



        completion = 40


        if user.first_name:
            completion += 10

        if user.last_name:
            completion += 10

        if user.email:
            completion += 10

        if documents:
            completion += 10

        if applications:
            completion += 20



        recommendations = []


        if documents == 0:

            recommendations.append(
                "Ajoutez votre CV."
            )


        if applications < 5:

            recommendations.append(
                "Postulez à davantage d'offres."
            )


        if matches == 0:

            recommendations.append(
                "Lancez un matching IA."
            )



        recent = (

            Application.query

            .filter_by(
                user_id=user.id
            )

            .limit(5)

            .all()

        )



        recent_list = []


        for application in recent:


            recent_list.append({

                "id": application.id,

                "status": application.status,

                "job_offer": (

                    application.job_offer.title

                    if application.job_offer

                    else None

                )

            })



        return {


            "user": {

                "first_name": user.first_name,

                "last_name": user.last_name

            },


            "stats": {

                "applications": applications,

                "documents": documents,

                "matches": matches,

                "interviews": interviews

            },


            "profile_completion": completion,


            "recommendations": recommendations,


            "recent_applications": recent_list

        }