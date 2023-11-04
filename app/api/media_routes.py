from flask import Blueprint, request, jsonify
from ..models import User, db
from flask_login import current_user, login_user, logout_user, login_required
from ..models import Media


# _______________________________________________________________________________


media_routes = Blueprint('media_bp', __name__)

# _______________________________________________________________________________
#  Get all Media -- WORKS

@media_routes.route("/", methods=["GET"])
def get_all_media():
    all_media = Media.query.all()
    all_media_list = []

    for media_item in all_media:
        media_dict = {
            'id': media_item.id,
            'type': media_item.type,
            'url': media_item.photo_url
            }

        all_media_list.append(media_dict)

    if all_media_list:
        return jsonify(all_media_list)
    else:
        return jsonify({'message': 'Media not found'}), 404

# _______________________________________________________________________________

# Create a New Media --- WORKS


@media_routes.route('/create', methods=['POST'])
def create_media():
    data = request.get_json()

    # print("current user is: **********************************", current_user)


    new_media = Media(
        user_id=current_user.id,
        video_url=data['video_url'],
        photo_url=data['photo_url'],
        description=data['description'],
        authorization=data['authorization'],
        type=data['type']
    )
    db.session.add(new_media)
    db.session.commit()
    return jsonify(new_media.to_dict())



# _______________________________________________________________________________


# Get General Media by ID -- WORKS


@media_routes.route('/<int:id>', methods=['GET'])
def get_media(id):
    media = Media.query.get(id)
    if media:
        return jsonify(media.to_dict())
    return jsonify({'message': 'Media not found'}), 404

# _______________________________________________________________________________

# Update General Media by ID -- WORKS


@media_routes.route('/<int:id>', methods=['PUT'])
def update_media(id):
    media =Media.query.get(id)
    if not media:
        return jsonify({'message': 'Media not found'}), 404

    data = request.get_json()

    media.video_url = data.get('video_url', media.video_url)
    media.photo_url = data.get('photo_url', media.photo_url)
    media.description = data.get('description', media.description)
    media.authorization = data.get('authorization', media.authorization)

    db.session.commit()
    return jsonify(media.to_dict())




# _______________________________________________________________________________


# Delete General Media by ID -- WORKS


@media_routes.route('/<int:id>', methods=['DELETE'])
def delete_media(id):
    media = Media.query.get(id)
    if media:
        db.session.delete(media)
        db.session.commit()
        return jsonify({'message': 'Media deleted'})
    return jsonify({'message': 'Media not found'}), 404



# _______________________________________________________________________________

# Get Media by Type

@media_routes.route('/type/<string:type>', methods=['GET'])
def get_media_by_type(type):
    media = Media.query.filter(Media.type == type).all()

    media_list = []

    for media_item in media:
        media_dict = {
            'id': media_item.id,
            'type': media_item.type,
            'url': media_item.photo_url
            }

        media_list.append(media_dict)

    if media_list:
        return jsonify(media_list)
    else:
        return jsonify({'message': 'Media not found'}), 404
