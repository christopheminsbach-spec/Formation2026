from flask import Blueprint, jsonify

from flask_jwt_extended import jwt_required

documents_bp = Blueprint(
    "documents",
    __name__
)


@documents_bp.get("/")
@jwt_required()
def documents():

    return jsonify({
        "documents": [
            {
                "name": "CV.pdf",
                "type": "CV"
            },
            {
                "name": "lettre.pdf",
                "type": "Motivation"
            }
        ]
    })
