from flask import Blueprint, request, jsonify
from ..models import  User, db, Testimonial
from flask_login import current_user, login_required
from ..forms.create_testomonial import CreateTestimonialForm
from flask_wtf.csrf import generate_csrf

testimonial_bp = Blueprint(
    "testimonial_routes", __name__)

# GET ALL TESTIMONIAL
#need to add @login_required once log in is complete and working
@testimonial_bp.route('/',methods=["GET"])
def get_all_testimonials():
    """
    Get all testimonials of the studio
    """
    # user_id = current_user.id
    testimonials = Testimonial.query.all()
    return {'testimonials': [i.to_dict() for i in testimonials]}

# CREATE A TESTIMONIAL

@testimonial_bp.route('/',methods=["POST"])

# @login_required

def create_testimonial():
    """
    Create a new testimonial
    """
    create_testimonial_form = CreateTestimonialForm()
    # create_testimonial_form['csrf_token'].data = request.cookies['csrf_token']

    csrf_token = generate_csrf()
    create_testimonial_form['csrf_token'].data = csrf_token
    print('FRONTEND FETCHING ___________')
    if  create_testimonial_form.validate_on_submit():
        data =  create_testimonial_form.data
        new_testimonial = Testimonial(
                user_id= current_user.id,
                content= data["content"],
                first_name=data["first_name"],
                last_name=data["last_name"],
                role=data["role"]
            )
        print("VALIDATE ON SUBMIT WORK<>>>>>>>>>>>>>>>>")

        db.session.add(new_testimonial)
        db.session.commit()

        new_testimonial_obj = new_testimonial.to_dict()
        return new_testimonial_obj, 201
    return {"Error": "Validation Error"}, 401,  print(create_testimonial_form.errors)


#  DELETE A TESTIMONIAL

@testimonial_bp.route('/<int:testimonial_id>/',methods=["DELETE"])
# @login_required

def delete_testimonial(testimonial_id):
    """
    Delete a testimonial based on testimonial_id
    """
    # user_auth = current_user.authorization
    user_auth = "admin"
    testimonial = Testimonial.query.get(testimonial_id)
    if testimonial:
        if user_auth != 'admin':
            return {'errors': 'You do not have authorization to delete testimonials. '}, 400
        db.session.delete(testimonial)
        db.session.commit()
        return {'testimonial': testimonial.to_dict()}, 201
    else:
        return {'errors': 'Testimonial does not exist.'}, 400
