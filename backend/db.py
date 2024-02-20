import sqlite3

from flask import g

DATABASE = 'backend.sqlite'

def get_db():
    db.getattr(g, '__db', None)
    if db is None:
        db = g.__database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '__database', None)
    if db is not None:
        db.close()