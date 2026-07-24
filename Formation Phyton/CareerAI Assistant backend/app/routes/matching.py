from flask import Blueprint,jsonify


matching_bp=Blueprint(
    "matching",
    __name__
)



@matching_bp.route("/")
def matching():

    return jsonify({

        "matches":[

            {
                "company":"OpenAI",
                "score":92
            },

            {
                "company":"Google",
                "score":88
            }

        ]

    })