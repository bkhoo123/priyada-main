from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


# ________________________________________________________________________________________________________


class Dance_Class(db.Model):

    __tablename__ = "dance_classes"

    id = db.Column(db.Integer, primary_key=True)
    class_one=db.Column(db.String(100), nullable=False)
    class_two=db.Column(db.String(100), nullable=False)
    level=db.Column(db.String(255), nullable=False)
    description = db.Column(db.TEXT, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())


    # media = db.relationship("Media", back_populates="dance_class")

    def to_dict(self):
        return {
            'id': self.id,
            'class_one':self.class_one,
            'class_two':self.class_two,
            'level':self.level,
            'description': self.description,
            'created_at': self.created_at,

        }
