from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.src.services.dashboard_service import get_dashboard_data


dashboard_bp = Blueprint(
    "dashboard",
    __name__,
    url_prefix="/api/dashboard"
)


@dashboard_bp.route("/", methods=["GET"])
@jwt_required()
def dashboard():

    user_id = get_jwt_identity()


    data = get_dashboard_data(
        user_id
    )


    return jsonify(data), 200