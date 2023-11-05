1. Install dependencies

pip install -r requirements.txt

2. Run server

pipenv run flask run  

3. Run tests
http://localhost:5000/test

You should be able to see the following output:

{
  "message": "Test Route"
}

4. Initialize database
pipenv run flask db init

5. Migrate database
pipenv run flask db migrate

6. Upgrade database
pipenv run flask upgrade

7. Seed database
pipenv run flask seed all

* Undo seed data (if needed)
pipenv run flask seed undo
