from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
import datetime

# Adds a demo user, you can add other users here if you want
def seed_users():

    user1 = User(
        username='DemoUser',
        email='demouser@gmail.com',
        password='demopassword',
        authorization='admin',
        first_name='Demo',
        last_name='User',
        address='12345 Waterfront Street, San Francisco, CA',
        phone_number="1234567890",
    )

    user2 = User(
        username='anjalis',
        email='anjalis88@gmail.com',
        password='132qq800',
        authorization='student',
        first_name="Anjali",
        last_name="S.",
        address='22 Queen Street',
        phone_number="8006667577",
        payment_info='need an update'
    )

    user3 = User(
        username='RohanB777',
        email='rohan@gmail.com',
        password='wx11iio0',
        authorization='student',
        first_name="Rohan",
        last_name="B.",
        address='153 Faith Avenue',
        phone_number="6266667727",
    )

    user4 = User(
        username='AparnaK777',
        email='Aparna@aa.io',
        password='fishbowl33',
        authorization='student',
        first_name="Aparna",
        last_name="K.",
        address='3296 Disney Road',
        phone_number="7777777777",
    )

    user5 = User(
        username='KeerthanaY',
        email='keerthanay@gmail.com',
        password='quacksmile',
        authorization='student',
        first_name="Keerthana",
        last_name="Yellapragada",
        address='888 Happy Street',
        phone_number="7971211113",
    )

    user6 = User(
        username='PallabKar979',
        email='PallabKar@gmail.com',
        password='erina123',
        authorization='student',
        first_name="Pallab",
        last_name="Kar",
        address='2945 Green Street',
        phone_number="2123334442",
    )

    user7 = User(
        username='PriyankaS',
        email='PriyankaS@gmail.com',
        password='eiooqwe22',
        authorization='student',
        first_name="Priyanka",
        last_name="Subramanyam",
        address='645 University Street',
        phone_number="6266667774",
    )

    user8 = User(
        username='VandanaA',
        email='VandanaA@gmail.com',
        password='obnfeitt',
        authorization='student',
        first_name="Vandana",
        last_name="A",
        address='399 Elysian Street',
        phone_number="6266667771",
    )

    user9 = User(
        username='ShubadraJ',
        email='Shubadraj@gmail.com',
        password='shu577',
        authorization='student',
        first_name="Shubadra",
        last_name="J",
        address='888 Kite Street',
        phone_number="6266667772",
    )

    user10 = User(
        username='CharlesD',
        email='CharlesD@gmail.com',
        password='uioovoo0',
        authorization='student',
        first_name="Charles",
        last_name="D.",
        address='999 Pine Street',
        phone_number="3236861346",
    )

    user11 = User(
        username='KarthikB777',
        email='KarthikB7@gmail.com',
        password='george123',
        authorization='student',
        first_name="Karthik",
        last_name="G.",
        address='222 Dodger Street',
        phone_number="6267995823",
    )


    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)
    db.session.add(user11)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
