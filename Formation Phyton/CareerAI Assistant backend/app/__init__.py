from flask import Flask
from flask_cors import CORS

from app.extensions import db, jwt, bcrypt


def create_app():

    app = Flask(__name__)

    app.config.from_object("app.config.Config")

    CORS(app)

    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)

    from app import models

    from app.routes.dashboard import dashboard_bp
    app.register_blueprint(dashboard_bp)

    return app