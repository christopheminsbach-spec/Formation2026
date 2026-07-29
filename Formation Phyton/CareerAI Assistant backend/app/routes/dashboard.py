from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity


dashboard_bp = Blueprint(
    "dashboard",
    __name__,
    url_prefix="/api/dashboard"
)


@dashboard_bp.get("/")
@jwt_required()
def dashboard():

    user_id = get_jwt_identity()

    return jsonify({
        "success": True,
        "message": "Dashboard connecté au backend",
        "user_id": user_id,
        "stats": {
            "applications": 12,
            "interviews": 4,
            "documents": 8,
            "matches": 17,
        }
    }), 200