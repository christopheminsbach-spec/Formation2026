from flask import Blueprint, jsonify, request

from app.extensions import db, bcrypt

from app.models.user import User

from flask_jwt_extended import (
    create_access_token,
    jwt_required,
    get_jwt_identity
)



auth_bp = Blueprint(
    "auth",
    __name__
)



# =====================
# INSCRIPTION
# =====================

@auth_bp.post("/register")
def register():


    data=request.json


    existing_user = User.query.filter_by(
        email=data["email"]
    ).first()


    if existing_user:

        return jsonify({

            "message":"Email déjà utilisé"

        }),409



    hashed_password = bcrypt.generate_password_hash(
        data["password"]
    ).decode("utf-8")



    user = User(

        firstname=data["firstname"],

        lastname=data["lastname"],

        email=data["email"],

        password=hashed_password

    )


    db.session.add(user)

    db.session.commit()



    return jsonify({

        "message":"Utilisateur créé"

    }),201




# =====================
# LOGIN
# =====================

@auth_bp.post("/login")
def login():


    data=request.json


    user = User.query.filter_by(
        email=data["email"]
    ).first()



    if not user:

        return jsonify({

            "message":"Utilisateur introuvable"

        }),404



    if not bcrypt.check_password_hash(
        user.password,
        data["password"]
    ):

        return jsonify({

            "message":"Mot de passe incorrect"

        }),401



    token=create_access_token(
        identity=str(user.id)
    )


    return jsonify({

        "token":token,

        "user":user.to_dict()

    })





# =====================
# PROFIL CONNECTE
# =====================

@auth_bp.get("/me")
@jwt_required()
def me():


    user_id=get_jwt_identity()



    user=User.query.get(user_id)



    return jsonify(
        user.to_dict()
    )