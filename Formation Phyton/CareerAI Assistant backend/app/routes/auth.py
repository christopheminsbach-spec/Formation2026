from flask import Blueprint, jsonify, request

from flask_jwt_extended import (
    create_access_token
)

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


    first_name = (
        data.get("first_name")
        or data.get("firstname")
    )

    last_name = (
        data.get("last_name")
        or data.get("lastname")
    )

    email = data.get("email")

    password = data.get("password")


    # Validation

    if not first_name or not last_name or not email or not password:

        return jsonify({

            "message": "Tous les champs sont obligatoires"

        }), 400



    # Nettoyage

    first_name = first_name.strip()

    last_name = last_name.strip()

    email = email.strip().lower()



    # Vérification utilisateur existant

    existing_user = User.query.filter_by(
        email=email
    ).first()


    if existing_user:

        return jsonify({

            "message": "Cette adresse email existe déjà"

        }), 409



    # Hash password

    password_hash = bcrypt.generate_password_hash(
        password
    ).decode("utf-8")



    # Création utilisateur

    user = User(

        first_name=first_name,

        last_name=last_name,

        email=email,

        password_hash=password_hash,

        role="user"

    )


    try:

        db.session.add(user)

        db.session.commit()


    except Exception as e:

        db.session.rollback()

        print(e)

        return jsonify({

            "message": "Erreur création utilisateur"

        }), 500



    # Création JWT

    access_token = create_access_token(

        identity=str(user.id)

    )



    return jsonify({

        "message": "Compte créé avec succès",

        "access_token": access_token,

        "user": {

            "id": user.id,

            "first_name": user.first_name,

            "last_name": user.last_name,

            "email": user.email,

            "role": user.role,

            "is_active": user.is_active

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



    if not email or not password:


        return jsonify({

            "message": "Email et mot de passe obligatoires"

        }), 400



    email = email.strip().lower()



    user = User.query.filter_by(

        email=email

    ).first()



    if not user:


        return jsonify({

            "message": "Email ou mot de passe incorrect"

        }), 401



    if not bcrypt.check_password_hash(

        user.password_hash,

        password

    ):


        return jsonify({

            "message": "Email ou mot de passe incorrect"

        }), 401




    # JWT

    access_token = create_access_token(

        identity=str(user.id)

    )



    return jsonify({

        "message": "Connexion réussie",

        "access_token": access_token,

        "user": {


            "id": user.id,

            "first_name": user.first_name,

            "last_name": user.last_name,

            "email": user.email,

            "role": user.role,

            "is_active": user.is_active

        }

    }), 200