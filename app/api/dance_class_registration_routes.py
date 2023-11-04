from flask import Blueprint, request
from ..models import DanceClassRegistration, User, db
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.dance_class_registration_form import CreateDanceClassRegistrationForm

from flask_wtf.csrf import generate_csrf

# ____________________________________________________________________________________________________________________

dance_class_registration_bp = Blueprint(
    "dance_class_registration_routes", __name__, url_prefix="/api/danceclassregistrations")

# ____________________________________________________________________________________________________________________

# GET ALL DANCE CLASS REGISTRATIONS -- WORKS


@dance_class_registration_bp.route("/", methods=["GET"])
def all_dance_class_registrations():
    dance_class_registrations = DanceClassRegistration.query.all()
    response = []

    if dance_class_registrations:
        for apt in dance_class_registrations:
            apt_obj = apt.to_dict()
            response.append(apt_obj)
        print("THIS IS dance_class_registrations FROM BACKEND", response)
        return {
            "dance_class_registrations": response
        }, 200
    return {"Error": "Registration Not Found"}, 404

# ____________________________________________________________________________________________________
#  GET DANCE REGISTRATION BY ID -- WORKS


@dance_class_registration_bp.route("/<int:dance_apt_id>/", methods=["GET"])
def get_dance_registration(dance_apt_id):
    dance_apt = DanceClassRegistration.query.get(dance_apt_id)

    if dance_apt:
        dance_apt_obj = dance_apt.to_dict()
        return dance_apt_obj, 201

    return {"Error": "Registration Not Found"}, 404


# ____________________________________________________________________________________________________

# CREATE A DANCE CLASS REGISTRATION -- WORKS

@dance_class_registration_bp.route("/new/", methods=["POST"])
# @login_required
def create_dance_registration():

    create_dance_apt_form = CreateDanceClassRegistrationForm()
    # create_dance_apt_form['csrf_token'].data = request.cookies['csrf_token']

    csrf_token = generate_csrf()
    create_dance_apt_form['csrf_token'].data = csrf_token

    print("current user is: **********************************", current_user)

    if create_dance_apt_form.validate_on_submit():
        data = create_dance_apt_form.data
        new_dance_apt = DanceClassRegistration(
                user_id=current_user.id,

                # type cast level into an integer --> dance_class_id
                dance_class_id=int(data["dance_class_id"]),

                age=int(data['age']),
                location=data['location'],
                notes=data["notes"],
                is_approved=False,
                attendance=False,
            )

        db.session.add(new_dance_apt)
        db.session.commit()

        new_apt_obj = new_dance_apt.to_dict()
        return new_apt_obj, 201
    return {"Error": "Validation Error"}, 401


# __________________________________________________________________________________________________



# DELETE A DANCE CLASS REGISTRATION -- WORKS


@dance_class_registration_bp.route("/<int:dance_apt_id>/", methods=["DELETE"])
@login_required
def delete_dance_registration(dance_apt_id):

    current_dance_apt = DanceClassRegistration.query.get(dance_apt_id)

    if current_dance_apt:
        db.session.delete(current_dance_apt)
        db.session.commit()
        return "Registration was succesfully deleted"

    return {"Error": "Registration Not Found"}, 404


# function to convert datetime obj to integer value so we can compare

def to_integer(date_time):
    return 10000*date_time.year + 100*date_time.month + date_time.day


# _____________________________________________________________________________________
