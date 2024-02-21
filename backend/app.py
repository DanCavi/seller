import mariadb
import datetime
import json
from flask import Flask

app = Flask(__name__)

conn_params = {
    "user": "root",
    "password": "root",
    "host": "localhost",
    "database": "EC_MaquinaVentas",
    "port": 3306,
}

@app.route("/perfiles-usuario", methods=["GET"])
def index():
    conn = mariadb.connect(**conn_params)

    cur = conn.cursor()

    cur.execute("select * from perfil")

    row_headers = [x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data = []
    for result in rv:
        
        json_data.append(dict(zip(row_headers, result)))
    
    return json_data
    conn.close()

@app.route("/")
def hello():
    return "API FLASK"

