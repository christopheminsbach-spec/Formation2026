from flask import Blueprint,jsonify


documents_bp=Blueprint(
    "documents",
    __name__
)



@documents_bp.route("/")
def documents():

    return jsonify({

        "documents":[

            {
                "name":"CV.pdf",
                "type":"CV"
            },

            {
                "name":"lettre.pdf",
                "type":"Motivation"
            }

        ]

    })