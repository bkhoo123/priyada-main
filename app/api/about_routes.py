# we won't need this route for now since we're using hardcoded info for about pages

from app.models import db, User
from flask import Blueprint , render_template,jsonify
from app.models import User

about_routes = Blueprint('about', __name__)


@about_routes.route('/artist')
# @login_required ?
def about_artist():
    artist_data = {
        "name": "Priyanka Raghuraman",
        "bio": "Priyanka Raghuraman is a passionate and talented multidisciplinary artist...",
        "achievements": "She has received numerous honors and awards for her exceptional work...",
        # Add more data as needed
    }
    return jsonify(artist_data)
