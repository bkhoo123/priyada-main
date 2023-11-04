from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


# ________________________________________________________________________________________________________


class Service(db.Model):

    __tablename__ = "services"

    id = db.Column(db.Integer, primary_key=True)
    category=db.Column(db.String(100), nullable=False)
    description = db.Column(db.TEXT, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())


    # services = db.relationship("User", back_populates="services")


    def to_dict(self):
        return {
            'id': self.id,
            'category':self.category,
            'description':self.description,
            'created_at': self.created_at,

        }
