from flask import Blueprint, jsonify

from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity
)

from app.models.user import User


profile_bp = Blueprint(
    "profile",
    __name__,
    url_prefix="/api/profile"
)


@profile_bp.get("/")
@jwt_required()
def profile():

    user = User.query.get(
        get_jwt_identity()
    )

    return jsonify({

        "user":{

            "id":user.id,

            "first_name":user.first_name,

            "last_name":user.last_name,

            "email":user.email,

            "role":user.role

        }

    })