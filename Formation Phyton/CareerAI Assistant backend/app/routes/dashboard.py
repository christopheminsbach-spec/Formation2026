from flask import Blueprint, jsonify

from flask_jwt_extended import jwt_required

from app.services.dashboard_service import DashboardService


dashboard_bp = Blueprint(
    "dashboard",
    __name__,
    url_prefix="/api/dashboard"
)


@dashboard_bp.get("/")
@jwt_required()
def dashboard():

    data = DashboardService.get_dashboard()

    return jsonify(data), 200