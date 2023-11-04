from flask import Flask, session, redirect, url_for, Blueprint
from ..oauth_config import oauth
from ..models import db, User
from flask_login import login_user, login_required, current_user, logout_user
import requests

google_routes = Blueprint('google', __name__)

# Login
@google_routes.route('/login')
def googleLogin():
    if current_user.is_authenticated:
        logout_user()

    return oauth.dance_class_app.authorize_redirect(url_for('google.googleCallback', _external=True))

# Callback
@google_routes.route('/callback')
def googleCallback():
    token = oauth.dance_class_app.authorize_access_token()
    session['google'] = token
    user = User.query.filter_by(email=token['userinfo']['email']).first()
    if not user:
        new_user = User(
            email=token['userinfo']['email'],
            first_name=token['userinfo']['given_name'],
            last_name=token['userinfo']['family_name'],
            password='defaultpassword',
            username=token['userinfo']['name'],
            address='defaultaddress',
            phone_number='0000000000',
            authorization='student'
        )
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user)
    else:
        login_user(user)


    return redirect('/api/google/display_data')

# Display Data
@google_routes.route('/display_data')
@login_required
def display_data():
    if session.get('google') is None:
        return redirect(url_for('google.googleLogin'))
    return session.get('google')

# Logout
@google_routes.route('/logout')
@login_required
def logout():
    requests.post('https://oauth2.googleapis.com/revoke',
    params={'token': session['google']['access_token']},
    headers = {'content-type': 'application/x-www-form-urlencoded'})
    return redirect('/api/auth/logout')

# View the session data
@google_routes.route('/view_session')
def view_session():
    session_data = session.copy()  # Create a copy of the session data
    return str(session_data)
