import os
import sys

# Get the current script's directory
current_dir = os.path.dirname(__file__)

# Append the project's root directory to the Python path
project_root = os.path.abspath(os.path.join(current_dir, "..", ".."))
sys.path.append(project_root)

# Now, you can import your modules
from app.models import db, environment, SCHEMA, Service



def seed_services():

    Makeup = Service(
    category= "Makeup",
    description="Dance Makeup for Arengetrams, Photoshoots & Shows. Dance Makeup Workshops, Theatre Stage Makeup"

    )
    Hosting = Service(
    category= "Emceeing/Hosting",
    description="Emcee/hosting for shows, tv shows, productions, etc"
    )

    Other = Service(
    category= "Other/Nattuvangam",
    description="Priyanka offers nattuvangam servies for concerts, productions, and private audio recordings."
    )

    db.session.add(Makeup)
    db.session.add(Hosting)
    db.session.add(Other)


    db.session.commit()


def undo_services():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.services RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM services")

    db.session.commit()
