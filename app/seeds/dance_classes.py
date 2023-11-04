import os
import sys

# Get the current script's directory
current_dir = os.path.dirname(__file__)

# Append the project's root directory to the Python path
project_root = os.path.abspath(os.path.join(current_dir, "..", ".."))
sys.path.append(project_root)

# Now, you can import your modules
from app.models import db, environment, SCHEMA, Dance_Class



def seed_dance_classes():

    Beginner = Dance_Class(
    class_one="Monday at 5:00 pm",
    class_two="Thursday at 6:00 pm",
    level= "Beginner",
    description="Fundamentals & Basics: Adavus, Jathis, Mudras, Padha Bhedas and Theory"

    )

    Intermediate = Dance_Class(
    class_one="Monday at 6:00 pm",
    class_two="Friday at 6:00 pm",
    level= "Intermediate",
    description="Fundamentals & Items: Pushpanjalis, Alarippus, Jathiswarams, Dance Theory, etc"

    )

    Advanced = Dance_Class(
    class_one="Monday at 7:00 pm",
    class_two="Saturday 9:30 am",
    level= "Advanced",
    description="Advanced Dance items: Padhams, Varnams, Javalis, etc"

    )

    Senior = Dance_Class(
    class_one="Available on request",
    class_two="Available on request",
    level= "Senior",
    description="One-on-One mentorship and training available for senior artists looking to sharpen their performance skills"

    )





    db.session.add(Beginner)
    db.session.add(Intermediate)
    db.session.add(Advanced)
    db.session.add(Senior)

    db.session.commit()


def undo_dance_classes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.dance_classes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM dance_classes")

    db.session.commit()
