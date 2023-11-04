from flask_login import login_required, current_user, logout_user
from app.models import db, User
from app.forms import UpdateForm
from flask import Blueprint,request
from flask_wtf.csrf import generate_csrf

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/update', methods=['PUT'])
@login_required
def update_user():
    user = User.query.get(current_user.id)
    if not user:
        return {"errors": "User not found"}
    form = UpdateForm()
    csrf_token = generate_csrf()
    form['csrf_token'].data = csrf_token
    # form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if 'username' in form.data and form.data['username']:
            user.username = form.data['username']
        if 'email' in form.data and form.data['email']:
            user.email = form.data['email']
        if 'password' in form.data and form.data['password']:
            user.password = form.data['password']
        if 'authorization' in form.data and form.data['authorization']:
            user.authorization = form.data['authorization']
        if 'level' in form.data and form.data['level']:
            user.level = form.data['level']
        if 'first_name' in form.data and form.data['first_name']:
            user.first_name = form.data['first_name']
        if 'last_name' in form.data and form.data['last_name']:
            user.last_name = form.data['last_name']
        if 'address' in form.data and form.data['address']:
            user.address = form.data['address']
        if 'phone_number' in form.data and form.data['phone_number']:
            user.phone_number = form.data['phone_number']
        if 'free_user' in form.data and form.data['free_user']:
            user.free_user = form.data['free_user']
        if 'payment_info' in form.data and form.data['payment_info']:
            user.payment_info = form.data['payment_info']
        db.session.commit()
        return user.to_dict()
    else:
        return {"errors": form.errors}


# Current logged in user
@user_routes.route('/current_user')
@login_required
def current():
    return {"current_user": current_user.to_dict()}


# Users can delete their own accounts
@user_routes.route('/delete', methods=['DELETE'])
@login_required
def delete_user():
    user = User.query.get(current_user.id)
    if not user:
        return {"errors": "User not found"}
    db.session.delete(user)
    db.session.commit()
    logout_user()
    return {"message": "User deleted"}
