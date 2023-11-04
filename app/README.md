1. Install dependencies

pip install -r requirements.txt

2. Run server

flask --app backend run

3. Run tests
http://localhost:5000/test

You should be able to see the following output:

{
  "message": "Test Route"
}

4. Initialize database
flask --app backend db init

5. Migrate database
flask --app backend db migrate

6. Upgrade database
flask --app backend db upgrade

7. Seed database
flask --app backend seed all

* Undo seed data (if needed)
flask --app backend seed undo
