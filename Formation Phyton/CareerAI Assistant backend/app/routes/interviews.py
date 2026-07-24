from flask import Blueprint,jsonify


interviews_bp=Blueprint(
    "interviews",
    __name__
)



@interviews_bp.route("/questions")
def questions():


    return jsonify({

        "questions":[

            "Présentez-vous",

            "Pourquoi cette entreprise ?",

            "Quels sont vos projets ?"

        ]

    })