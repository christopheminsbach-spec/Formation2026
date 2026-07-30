from flask import Flask
from flask_cors import CORS

from app.config import Config
from app.extensions import (
    db,
    jwt,
    bcrypt,
    migrate
)


def create_app():

    app = Flask(__name__)

    app.config.from_object(Config)


    CORS(
    app,
    resources={
        r"/api/*":{
            "origins":"http://localhost:5173",
            "supports_credentials":True
        }
    }
    )


    db.init_app(app)

    jwt.init_app(app)

    bcrypt.init_app(app)

    migrate.init_app(
        app,
        db
    )


    from app.routes.auth import auth_bp
    from app.routes.dashboard import dashboard_bp
    from app.routes.profile import profile_bp
    from app.routes.applications import applications_bp


    app.register_blueprint(auth_bp)

    app.register_blueprint(dashboard_bp)

    app.register_blueprint(profile_bp)

    app.register_blueprint(applications_bp)


    return app