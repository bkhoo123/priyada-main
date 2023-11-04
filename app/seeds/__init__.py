from flask.cli import AppGroup
from .testimonials import seed_testimonials, undo_testimonials
from .users import seed_users, undo_users
from .medias import seed_medias, undo_medias
from .dance_classes import seed_dance_classes, undo_dance_classes
from .services import seed_services, undo_services

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_medias()
        undo_testimonials()
        undo_users()

    seed_users()
    seed_testimonials()
    seed_medias()
    seed_services()
    seed_dance_classes()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_medias()
    undo_testimonials()
    undo_users()
    undo_dance_classes()
    undo_services()
