from flask import Blueprint, jsonify, request

from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity
)

from app.extensions import db

from app.models.application import Application
from app.models.profile import Profile


applications_bp = Blueprint(
    "applications",
    __name__
)


@applications_bp.get("/")
@jwt_required()
def get_applications():

    user_id = int(get_jwt_identity())

    profile = Profile.query.filter_by(
        user_id=user_id
    ).first()

    if not profile:
        return jsonify({
            "message": "Profil utilisateur introuvable"
        }), 404

    applications = Application.query.filter_by(
        profile_id=profile.id
    ).all()

    return jsonify([
        {
            "id": application.id,
            "status": application.status,
            "profile_id": application.profile_id,
            "job_offer_id": application.job_offer_id
        }
        for application in applications
    ])


@applications_bp.post("/")
@jwt_required()
def create_application():

    user_id = int(get_jwt_identity())

    profile = Profile.query.filter_by(
        user_id=user_id
    ).first()

    if not profile:
        return jsonify({
            "message": "Profil utilisateur introuvable"
        }), 404

    data = request.get_json()

    if not data:
        return jsonify({
            "message": "Données JSON manquantes"
        }), 400

    job_offer_id = data.get("job_offer_id")

    if not job_offer_id:
        return jsonify({
            "message": "job_offer_id est obligatoire"
        }), 400

    application = Application(
        profile_id=profile.id,
        job_offer_id=job_offer_id,
        status=data.get(
            "status",
            "ENVOYEE"
        )
    )

    db.session.add(application)
    db.session.commit()

    return jsonify({
        "message": "Candidature créée",
        "application": {
            "id": application.id,
            "profile_id": application.profile_id,
            "job_offer_id": application.job_offer_id,
            "status": application.status
        }
    }), 201