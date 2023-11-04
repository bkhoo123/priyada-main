from flask import Blueprint, render_template, url_for, redirect, request, jsonify
from ..models import Billing, User, db
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.billing_form import CreateBillingForm


# ____________________________________________________________________________________________________________________

billing_bp = Blueprint(
    "billing_routes", __name__, url_prefix="/api/billing")
# ____________________________________________________________________________________________________________________


# CREATE BILLING SUBSCRIPTION

@billing_bp.route("/new/", methods=["POST"])
def create_billing():

    create_billing_form = CreateBillingForm()
    create_billing_form['csrf_token'].data = request.cookies['csrf_token']
    # print("current user is: **********************************", current_user)

    if  create_billing_form.validate_on_submit():
        data =  create_billing_form.data
        new_billing = Billing(
                user_id=current_user.id,
                billing_date=data["billing_date"],
                amount=data["amount"],
                billing_type=data["billing_type"],
                charged=True,
            )

        db.session.add(new_billing)
        db.session.commit()

        new_billing_obj = new_billing.to_dict()
        return new_billing_obj, 201
    return {"Error": "Validation Error"}, 401


# ____________________________________________________________________________________


# EDIT BILLING SUBSCRIPTION BY BILLING ID

@billing_bp.route('/<int:billing_id>/', methods=["PUT"])
def edit_billing(billing_id):
    edit_billing_form = CreateBillingForm()

    edit_billing_form['csrf_token'].data = request.cookies['csrf_token']

    if edit_billing_form.validate_on_submit():

        data = edit_billing_form.data
        billing = Billing.query.get(billing_id)

        billing.billing_type= data["billing_type"]
        billing.billing_date=data['billing_date']
        billing.amount=data['billing_amount']

        db.session.commit()

        edited_billing_obj = billing.to_dict()

        return edited_billing_obj, 201

    return {"Error": "Validation Error"}, 401
# ________________________________________________________________________________

#  DELETE BILLING SUBSCRIPTION
@billing_bp.route("/<int:billing_id>/", methods=["DELETE"])
def delete_billing(billing_id):

    curr_billing =Billing.query.get(billing_id)

    if curr_billing:
        db.session.delete(curr_billing)
        db.session.commit()

        return {"message" : "Billing succesfully deleted"}, 200

    return {"Error": "404 like Not Found"}, 404
