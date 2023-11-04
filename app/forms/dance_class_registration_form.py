from flask_wtf import FlaskForm
from ..models import db, User, DanceClassRegistration
from wtforms import StringField, SubmitField, IntegerField, BooleanField, SelectField, TextAreaField
from wtforms.validators import DataRequired

from flask_login import current_user, login_user, logout_user, login_required



class CreateDanceClassRegistrationForm(FlaskForm):

    # level: 1-beginner, 2-intermediate, 3-advanced, 4-senior
    dance_class_id = SelectField("dance_class_id", choices=[1,2,3,4], validators=[DataRequired()])

    age=IntegerField("age", validators=[DataRequired()] )

    location=StringField("location", validators=[DataRequired()])

    notes = TextAreaField("notes", validators=[DataRequired()])

    submit = SubmitField("Register")
