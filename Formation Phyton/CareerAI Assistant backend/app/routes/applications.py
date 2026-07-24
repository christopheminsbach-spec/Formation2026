from flask import Blueprint, jsonify, request

from app.extensions import db
from app.models.application import Application


applications_bp = Blueprint(
    "applications",
    __name__
)


@applications_bp.route("/", methods=["GET"])
def get_applications():

    applications = Application.query.all()

    return jsonify([
        {
            "id": app.id,
            "company": app.company,
            "position": app.position,
            "status": app.status
        }
        for app in applications
    ])


@applications_bp.route("/", methods=["POST"])
def create_application():

    data = request.json


    application = Application(
        company=data["company"],
        position=data["position"],
        status=data.get(
            "status",
            "Envoyée"
        )
    )


    db.session.add(application)
    db.session.commit()


    return jsonify({

        "message":"Candidature créée",

        "id":application.id

    }),201