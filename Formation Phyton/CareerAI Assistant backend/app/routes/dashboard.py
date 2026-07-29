from flask import Blueprint, jsonify
from flask_jwt_extended import get_jwt_identity, jwt_required


dashboard_bp = Blueprint(
    "dashboard",
    __name__,
    url_prefix="/api/dashboard",
)


@dashboard_bp.get("/")
@jwt_required()
def dashboard():

    user_id = get_jwt_identity()

    return jsonify({
        "message": "Dashboard chargé avec succès",
        "user_id": user_id,
    }), 200