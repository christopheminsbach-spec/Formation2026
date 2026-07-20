from flask import Flask
from sqlalchemy import select
from database import db, Courses
from config import Config

from routes.courses import course_bp
from routes.participants import participant_bp

app = Flask(__name__)

# Configuration SQLAlchemy
app.config.from_object(Config)

# On lie notre DB à l'app Flask
db.init_app(app)

# 
with app.app_context():
    db.create_all()

app.register_blueprint(course_bp)
app.register_blueprint(participant_bp)

@app.route("/courses")
def list_courses():
    statement = select(Courses)
    courses = db.session.scalars(statement).all()
    return [course.to_dict() for course in courses]

if __name__ == "__main__":
    app.run(debug=True)