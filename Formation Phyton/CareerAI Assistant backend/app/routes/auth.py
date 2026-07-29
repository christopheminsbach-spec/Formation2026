
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token

from app.extensions import db, bcrypt
from app.models.user import User


auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/api/auth"
)


# ============================================================
# REGISTER
# ============================================================

@auth_bp.post("/register")
def register():

    data = request.get_json() or {}

    firstname = data.get("firstname")
    lastname = data.get("lastname")
    email = data.get("email")
    password = data.get("password")

    # Validation
    if not firstname or not lastname or not email or not password:
        return jsonify({
            "message": "Tous les champs sont obligatoires"
        }), 400

    # Vérification email
    existing_user = User.query.filter_by(
        email=email
    ).first()

    if existing_user:
        return jsonify({
            "message": "Cette adresse email existe déjà"
        }), 409

    # Hash du mot de passe
    password_hash = bcrypt.generate_password_hash(
        password
    ).decode("utf-8")

    # Création utilisateur
    user = User(
        firstname=firstname,
        lastname=lastname,
        email=email,
        password_hash=password_hash
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message": "Utilisateur créé avec succès",
        "user": {
            "id": user.id,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email
        }
    }), 201


# ============================================================
# LOGIN
# ============================================================

@auth_bp.post("/login")
def login():

    data = request.get_json() or {}

    email = data.get("email")
    password = data.get("password")

    # Validation
    if not email or not password:
        return jsonify({
            "message": "Email et mot de passe obligatoires"
        }), 400

    # Recherche utilisateur
    user = User.query.filter_by(
        email=email
    ).first()

    if not user:
        return jsonify({
            "message": "Email ou mot de passe incorrect"
        }), 401

    # Vérification mot de passe
    if not bcrypt.check_password_hash(
        user.password_hash,
        password
    ):
        return jsonify({
            "message": "Email ou mot de passe incorrect"
        }), 401

    # Création JWT
    access_token = create_access_token(
        identity=str(user.id)
    )

    return jsonify({
        "message": "Connexion réussie",
        "access_token": access_token,
        "user": {
            "id": user.id,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email
        }
    }), 200

