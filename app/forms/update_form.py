from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, validators
from wtforms.validators import Email, ValidationError
from app.models import User

# Checking if user exists
def user_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


class UpdateForm(FlaskForm):
    username = StringField('username')
    email = StringField('email', validators=[Email(), user_exists])
    authorization = SelectField('authorization', choices=[('admin', 'Admin'), ('student', 'Student')], validators=[validators.Optional()])
    level = StringField('level')
    first_name = StringField('first_name')
    last_name = StringField('last_name')
    address = StringField('address')
    phone_number = StringField('phone_number')
    free_user = StringField('free_user')
    payment_info = StringField('payment_info')
    password = StringField('password')
