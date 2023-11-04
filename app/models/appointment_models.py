from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

# ________________________________________________________________________________________________________


Base=declarative_base()

# ________________________________________________________________________________________________________


class DanceClassRegistration(db.Model):

    __tablename__ = "dance_class_registration"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    dance_class_id=db.Column(db.Integer, db.ForeignKey("dance_classes.id"), nullable=False)
    age= db.Column(db.Integer, nullable=False)
    location = db.Column(db.String(200), nullable=False)
    notes = db.Column(db.TEXT, nullable=False)
    is_approved = db.Column(db.Boolean, nullable=False)
    attendance = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())


    # relationships
    user = db.relationship("User", back_populates="dance_class_registrations")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'dance_class_id':self.dance_class_id,
            'age':self.age,
            'location':self.location,
            'notes': self.notes,
            'is_approved': self.is_approved,
            'attendance': self.attendance,
            'created_at': self.created_at,

        }


# ________________________________________________________________________________________________________


class ServiceAppointment(db.Model):

    __tablename__ = "service_appointments"

    id=db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    service_id=db.Column(db.Integer, db.ForeignKey("services.id"), nullable=False)
    date= db.Column(db.DateTime, nullable=False, unique=False)
    location=db.Column(db.String(200), nullable=False)
    notes=db.Column(db.Text, nullable=False)
    is_approved= db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           unique=False, index=False, default=datetime.now())


    user = db.relationship("User", back_populates="service_appointments")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'service_id': self.service_id,
            'date': self.date,
            'location': self.location,
            'notes': self.notes,
            'is_approved': self.is_approved,
            'created_at': self.created_at,
        }
