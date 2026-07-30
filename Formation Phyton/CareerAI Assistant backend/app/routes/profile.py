
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.extensions import db
from app.models.user import User


profile_bp = Blueprint(
    "profile",
    __name__,
    url_prefix="/api/profile",
)


# ============================================================
# GET PROFILE
# ============================================================

@profile_bp.get("/")
@jwt_required()
def get_profile():

    # Récupération de l'identifiant présent dans le JWT
    user_id = get_jwt_identity()

    # Recherche de l'utilisateur connecté
    user = db.session.get(User, int(user_id))

    if not user:
        return jsonify({
            "message": "Utilisateur introuvable"
        }), 404

    return jsonify({
        "message": "Profil récupéré avec succès",
        "user": {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "role": user.role,
            "is_active": user.is_active,
        }
    }), 200


# ============================================================
# UPDATE PROFILE
# ============================================================

@profile_bp.put("/")
@jwt_required()
def update_profile():

    user_id = get_jwt_identity()

    user = db.session.get(User, int(user_id))

    if not user:
        return jsonify({
            "message": "Utilisateur introuvable"
        }), 404

    data = request.get_json() or {}

    first_name = data.get("first_name")
    last_name = data.get("last_name")

    if first_name is not None:
        first_name = first_name.strip()

        if not first_name:
            return jsonify({
                "message": "Le prénom ne peut pas être vide"
            }), 400

        user.first_name = first_name

    if last_name is not None:
        last_name = last_name.strip()

        if not last_name:
            return jsonify({
                "message": "Le nom ne peut pas être vide"
            }), 400

        user.last_name = last_name

    try:
        db.session.commit()

    except Exception:
        db.session.rollback()

        return jsonify({
            "message": "Erreur lors de la modification du profil"
        }), 500

    return jsonify({
        "message": "Profil modifié avec succès",
        "user": {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "role": user.role,
            "is_active": user.is_active,
        }
    }), 200

