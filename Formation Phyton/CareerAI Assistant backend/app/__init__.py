from flask import Flask
from flask_cors import CORS

from app.config import Config
from app.extensions import db, migrate, jwt, bcrypt

from app.routes.auth import auth_bp
from app.routes.profile import profile_bp
from app.routes.dashboard import dashboard_bp
from app.routes.applications import applications_bp


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)

    CORS(
        app,
        resources={r"/api/*": {"origins": "http://localhost:5173"}},
        supports_credentials=True,
    )

    app.register_blueprint(auth_bp)
    app.register_blueprint(profile_bp)
    app.register_blueprint(dashboard_bp)
    app.register_blueprint(applications_bp)

    @app.get("/")
    def home():
        return {
            "application": "CareerAI Assistant API",
            "status": "running",
        }

    return app