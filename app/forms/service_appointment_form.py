from flask_wtf import FlaskForm
from ..models import db, User, ServiceAppointment
from wtforms import StringField, SubmitField,DateField, SelectField, TextAreaField
from wtforms.validators import DataRequired
from flask_login import current_user, login_user, logout_user, login_required



class CreateServiceAppointmentForm(FlaskForm):

    #  type: 1-Makeup, 2-Emcee/hosting, 3-Other/Nattuvangam
    service_id = SelectField("service_id", choices=[1,2,3], validators=[DataRequired()])

    date = DateField("date", validators=[DataRequired()])

    location = StringField("location", validators=[DataRequired()])

    notes = TextAreaField("notes", validators=[DataRequired()])

    submit = SubmitField("Send Enquiry")







    # first_name = StringField("first_name", validators=[DataRequired()])

    # last_name = StringField("last_name", validators=[DataRequired()])

    # email =  StringField("email", validators=[DataRequired()])

    # phone_number = StringField("phone_number", validators=[DataRequired()])
