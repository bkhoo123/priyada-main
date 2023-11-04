from .db import db, environment, SCHEMA

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()

# ________________________________________________________________________________________________________



class Media(db.Model):

    __tablename__ = 'media'

    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    video_url = db.Column(db.String(200), nullable=True)
    photo_url=db.Column(db.String(200), nullable=True)
    authorization = db.Column(db.String(255), default="Public", nullable = False)
    description=db.Column(db.TEXT, nullable=True)
    type= db.Column(db.String(200), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())




    user = db.relationship("User", back_populates="media")


    def to_dict(self):
        return {
            'id': self.id,
            'video_url': self.video_url,
            'authorization': self.authorization
        }

    def __repr__(self):
        return f'<Media, id={self.id}, video_url={self.video_url},dance_class_id={self.dance_class_id}, authorization={self.authorization}'

# ________________________________________________________________________________________________________
