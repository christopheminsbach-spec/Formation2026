from flask import Flask
from flask_cors import CORS

from app.config import Config
from app.extensions import bcrypt, db, jwt, migrate


def create_app():
    app = Flask(__name__)

    # Configuration
    app.config.from_object(Config)

    # Extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)

    # CORS
    CORS(
        app,
        resources={
            r"/api/*": {
                "origins": [
                    "http://localhost:5173",
                    "http://127.0.0.1:5173",
                ]
            }
        },
        supports_credentials=True,
    )

    # Modèles SQLAlchemy
    from app.models.user import User
    from app.models.profile import Profile
    from app.models.application import Application
    from app.models.document import Document
    from app.models.interview import Interview
    from app.models.company import Company
    from app.models.job_offer import JobOffer
    from app.models.matching import Matching
    from app.models.skill import Skill
    from app.models.job_offer_skill import job_offer_skill

    # Blueprints
    from app.routes.auth import auth_bp
    from app.routes.dashboard import dashboard_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(dashboard_bp)

    return app