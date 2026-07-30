from flask import Blueprint, jsonify, request

from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity
)

from app.extensions import db
from app.models.application import Application


applications_bp = Blueprint(
    "applications",
    __name__,
    url_prefix="/api/applications"
)



@applications_bp.get("/")
@jwt_required()
def get_applications():

    user_id = get_jwt_identity()


    applications = Application.query.filter_by(
        user_id=int(user_id)
    ).all()


    return jsonify([
        {
            "id": app.id,
            "company": app.company,
            "position": app.position,
            "status": app.status,
            "created_at": app.created_at
        }
        for app in applications
    ])




@applications_bp.post("/")
@jwt_required()
def create_application():

    user_id = get_jwt_identity()


    data = request.json


    application = Application(

        user_id=int(user_id),

        company=data["company"],

        position=data["position"],

        status="Envoyée"

    )


    db.session.add(application)

    db.session.commit()



    return jsonify({

        "message":"Candidature créée",

        "application":{

            "id":application.id,

            "company":application.company,

            "position":application.position,

            "status":application.status

        }

    }),201




@applications_bp.put("/<int:id>")
@jwt_required()
def update_application(id):

    application = Application.query.get_or_404(id)


    data=request.json


    application.status=data["status"]


    db.session.commit()


    return jsonify({

        "message":"Statut modifié"

    })