from flask import Blueprint

participant_bp = Blueprint("participants", __name__)

# GET /courses/<id>/participants
@participant_bp.get("/courses/<int:id>/participants")
def get_participants(id):
    pass


# GET /courses/<id>/participants/<p_id>
@participant_bp.get("/courses/<int:id>/participants/<int:p_id>")
def get_participant(id, p_id):
    pass


# POST /courses/<id>/participants
@participant_bp.post("/courses/<int:id>/participants")
def create_participant(id):
    pass


# PUT /courses/<int:id>/participants/<p_id>
@participant_bp.put("/courses/<int:id>/participants/<int:p_id>")
def update_participant(id, p_id):
    pass


# DELETE /courses/<id>/participants/<p_id>
@participant_bp.delete("/courses/<int:id>/participants/<int:p_id>")
def delete_participant(id, p_id):
    pass