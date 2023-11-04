from flask import Blueprint, render_template, url_for, redirect, request, jsonify
from ..models import ServiceAppointment, User, db
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.service_appointment_form import CreateServiceAppointmentForm
from datetime import datetime

from flask_wtf.csrf import generate_csrf
# ____________________________________________________________________________________________________________________

service_appointment_bp = Blueprint(
    "service_appointments_routes", __name__, url_prefix="/api/serviceappointments")


# ____________________________________________________________________________________________________________________

# GET ALL SERVICE APPOINTMENTS


@service_appointment_bp.route("/", methods=["GET"])
def all_service_appointments():
    service_appointments = ServiceAppointment.query.all()
    response = []
    if service_appointments:
        for apt in service_appointments:
            apt_obj = apt.to_dict()
            response.append(apt_obj)
        print("THIS IS  service_appointments FROM BACKEND", response)
        return {
            "service_appointments": response
        }, 200
    return {"Error": "Appointment Not Found"}, 404
# _________________________________________________________________________________

#  GET SERVICE REGISTRATION BY ID -- WORKS


@service_appointment_bp.route("/<int:service_apt_id>/", methods=["GET"])
def get_service_apt(service_apt_id):
    service_apt = ServiceAppointment.query.get(service_apt_id)

    if service_apt:
        service_apt_obj = service_apt.to_dict()
        return service_apt_obj, 201

    return {"Error": "Service Appointment Not Found"}, 404


# ____________________________________________________________________________________________________

# CREATE A SERVICE APPOINTMENT

@ service_appointment_bp.route("/new/", methods=["POST"])
def create_service_apt():

    print("DID IT HIT THE BACKEND CREATE SERVICE APT ROUTE")

    create_service_apt_form = CreateServiceAppointmentForm()
    csrf_token = generate_csrf()
    create_service_apt_form['csrf_token'].data = csrf_token
    # create_service_apt_form['csrf_token'].data = request.cookies['csrf_token']


 # print("current user is: **********************************", current_user)


    if create_service_apt_form.validate_on_submit():
        print("FORM HAS VALIDATED!!!!!!!!!!!!!!!!!!!!!!!!!!")

        data = create_service_apt_form.data
        new_service_apt = ServiceAppointment(
            user_id=1,
            service_id = int(data["service_id"]),
            # service_id=int(data["type"]),
            date=data["date"],
            location=data["location"],
            notes=data["notes"],
            # isApproved=False
        )

        db.session.add(new_service_apt)
        db.session.commit()

        new_service_apt_obj = new_service_apt.to_dict()
        return new_service_apt_obj, 201

    return {"Error": "Validation Error"}, 401


# __________________________________________________________________________________________________


# DELETE A SERVICE APPOINTMENT


@service_appointment_bp.route("/<int:service_apt_id_id>/", methods=["DELETE"])
def delete_service_apt(service_apt_id):

    current_service_apt = ServiceAppointment.query.get(service_apt_id)

    if current_service_apt:
        db.session.delete(current_service_apt)
        db.session.commit()
        return "Your Service Appointment was succesfully deleted"

    return "404 Service Appointment Not Found"


# function to convert datetime obj to integer value so we can compare

def to_integer(date_time):
    return 10000*date_time.year + 100*date_time.month + date_time.day


# _____________________________________________________________________________________
