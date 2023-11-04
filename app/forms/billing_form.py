from flask_wtf import FlaskForm
from ..models import db, User, Billing
from wtforms import StringField, SubmitField, IntegerField, DateField, FloatField, SelectField
from wtforms.validators import DataRequired, ValidationError
from flask_login import current_user, login_user, logout_user, login_required



class CreateBillingForm(FlaskForm):

    billing_type = SelectField("Payment Model", choices=["Monthly: Billed every month on the 1st", "Quarterly: every 3 months", "Annually: billed once a year"], validators=[DataRequired()])

    billing_date = DateField('Billing Date',validators=[DataRequired()])

    amount = FloatField("Billing Amount", validators=[DataRequired()])

    submit = SubmitField("Make Payment")
