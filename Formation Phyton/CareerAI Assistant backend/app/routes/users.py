from flask import Blueprint,jsonify

from flask_jwt_extended import jwt_required,get_jwt_identity

from app.models.user import User



users_bp=Blueprint(
    "users",
    __name__
)



@users_bp.get("/profile")
@jwt_required()
def profile():


    user_id=get_jwt_identity()


    user=User.query.get(user_id)


    return jsonify(
        user.to_dict()
    )