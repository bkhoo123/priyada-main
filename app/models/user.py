from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from .db import db, environment, SCHEMA

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    authorization = db.Column(db.String(255), nullable = False)
    level = db.Column(db.String(255))
    first_name = db.Column(db.String(40), nullable = False)
    last_name = db.Column(db.String(40), nullable = False)
    # birthdate = db.Column(db.DateTime, nullable=False)
    address = db.Column(db.String(255), nullable = False)
    phone_number = db.Column(db.String, nullable = False)
    free_user = db.Column(db.Boolean, default=True)
    payment_info = db.Column(db.String(255), nullable=True)


    # relationships
    service_appointments = db.relationship("ServiceAppointment", back_populates='user', cascade="all, delete-orphan")
    dance_class_registrations = db.relationship("DanceClassRegistration", back_populates='user', cascade="all, delete-orphan")

    media = db.relationship("Media", back_populates='user')
    testimonials = db.relationship("Testimonial", back_populates="user")
    billings = db.relationship("Billing", back_populates='user', cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'authorization': self.authorization,
            'first_name':self.first_name,
            'last_name': self.last_name,
            'address': self.address,
            'phone_number': self.phone_number,
            'free_user': self.free_user,
            'payment_info': self.payment_info
        }

    def __repr__(self):
        return f'<User, id={self.id}, username={self.username},email={self.email}, authorization={self.authorization}, first_name={self.first_name}, last_name={self.last_name},address={self.address}, phone_number={self.phone_number}, free_user={self.free_user}, payment_info={self.payment_info}'
