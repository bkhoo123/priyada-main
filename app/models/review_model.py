from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    content = db.Column(db.String(1000))
    photo_url = db.Column(db.String(1000))
    review_type = db.Column(db.String(500))
    created_at = db.Column(db.DateTime)
    # star_rating = db.Column(db.Integer,nullable=False) # do we want star rating?

    #relationship
    user = db.relationship('User',back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content':self.content,
            'photo_url': self.photo_url,
            'review_type': self.review_type,
            'created_at':self.created_at,
        #    'star_rating': self.star_rating,
           }