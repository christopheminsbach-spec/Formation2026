from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token

from app.extensions import bcrypt, db
from app.models.user import User

auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/api/auth",
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

    # --------------------------------------------------------
    # Validation
    # --------------------------------------------------------

    if not firstname or not lastname or not email or not password:
        return jsonify({
            "message": "Tous les champs sont obligatoires"
        }), 400

    # --------------------------------------------------------
    # Nettoyage des données
    # --------------------------------------------------------

    firstname = firstname.strip()
    lastname = lastname.strip()
    email = email.strip().lower()

    if not firstname or not lastname or not email:
        return jsonify({
            "message": "Tous les champs sont obligatoires"
        }), 400

    # --------------------------------------------------------
    # Vérification de l'adresse email
    # --------------------------------------------------------

    existing_user = User.query.filter_by(
        email=email
    ).first()

    if existing_user:
        return jsonify({
            "message": "Cette adresse email existe déjà"
        }), 409

    # --------------------------------------------------------
    # Hash du mot de passe
    # --------------------------------------------------------

    password_hash = bcrypt.generate_password_hash(
        password
    ).decode("utf-8")

    # --------------------------------------------------------
    # Création de l'utilisateur
    # --------------------------------------------------------

    user = User(
        first_name=firstname,
        last_name=lastname,
        email=email,
        password_hash=password_hash,
    )

    try:
        db.session.add(user)
        db.session.commit()

    except Exception:
        db.session.rollback()

        return jsonify({
            "message": "Une erreur est survenue lors de la création du compte"
        }), 500

    # --------------------------------------------------------
    # Réponse
    # --------------------------------------------------------

    return jsonify({
        "message": "Utilisateur créé avec succès",
        "user": {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "role": user.role,
            "is_active": user.is_active,
        },
    }), 201


# ============================================================

# LOGIN

# ============================================================

@auth_bp.post("/login")
def login():
    data = request.get_json() or {}

    email = data.get("email")
    password = data.get("password")

    # --------------------------------------------------------
    # Validation
    # --------------------------------------------------------

    if not email or not password:
        return jsonify({
            "message": "Email et mot de passe obligatoires"
        }), 400

    # --------------------------------------------------------
    # Nettoyage de l'email
    # --------------------------------------------------------

    email = email.strip().lower()

    # --------------------------------------------------------
    # Recherche utilisateur
    # --------------------------------------------------------

    user = User.query.filter_by(
        email=email
    ).first()

    if not user:
        return jsonify({
            "message": "Email ou mot de passe incorrect"
        }), 401

    # --------------------------------------------------------
    # Vérification du mot de passe
    # --------------------------------------------------------

    if not bcrypt.check_password_hash(
        user.password_hash,
        password,
    ):
        return jsonify({
            "message": "Email ou mot de passe incorrect"
        }), 401

    # --------------------------------------------------------
    # Création du JWT
    # --------------------------------------------------------

    access_token = create_access_token(
        identity=str(user.id)
    )

    # --------------------------------------------------------
    # Réponse
    # --------------------------------------------------------

    return jsonify({
        "message": "Connexion réussie",
        "access_token": access_token,
        "user": {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "role": user.role,
            "is_active": user.is_active,
        },
    }), 200

