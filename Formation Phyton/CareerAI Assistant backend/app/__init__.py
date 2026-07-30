
from flask import Flask
from flask_cors import CORS

from app.extensions import db, jwt, bcrypt
from app.routes.auth import auth_bp
from app.routes.dashboard import dashboard_bp
from app.routes.profile import profile_bp


def create_app():
    app = Flask(__name__)

    app.config.from_object("app.config.Config")

    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)

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

    app.register_blueprint(auth_bp)
    app.register_blueprint(dashboard_bp)
    app.register_blueprint(profile_bp)

    return app

