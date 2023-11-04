from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()


# ________________________________________________________________________________________________________


class Billing(db.Model):

    __tablename__ = "billings"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    billing_type = db.Column(db.String(100),  nullable=False)
    amount= db.Column(db.Integer, nullable=False)
    charged = db.Column(db.Boolean, nullable=False, default=False)

    billing_date = db.Column(db.DateTime, nullable=False, unique=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           unique=False, index=False, default=datetime.now())


    user = db.relationship("User", back_populates="billings")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'billing_type': self.billing_type,
            'billing_date': self.date,
            'amount': self.amount,
            'created_at': self.created_at,
            'charged': self.charged

        }

    def __repr__(self):
        return f'<Billings, id={self.id}, user_id={self.user_id},billing_date={self.billing_date}, billing_type={self.billing_type}, amount={self.amount}, created_at={self.created_at},charged={self.charged}'


# ________________________________________________________________________________________________________
