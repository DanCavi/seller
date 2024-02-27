from flask import Flask
from controllers.profiles.perfiles import getPerfiles
from controllers.users.usuarios import getUsers, getUser
from controllers.prospectos.prospectos import getProspectos, getProspecto
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)





@app.route("/profiles", methods=["GET"])
def profilesToJson():
    jsondata = getPerfiles()
    return json.dumps(jsondata)

@app.route("/users", methods=["GET"])
def usersToJson():
    jsondata = getUsers()
    return json.dumps(jsondata)

@app.route("/users/<int:id>", methods=["GET"])
def userToJson(id):
    jsondata = getUser(id)
    return json.dumps(jsondata)

@app.route("/prospectos", methods=["GET"])
def prospectosToJson():
    jsondata = getProspectos()
    return json.dumps(jsondata)

@app.route("/prospectos/<int:id>", methods=["GET"])
def prospectoToJson(id):
    jsondata = getProspecto(id)
    return json.dumps(jsondata)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port = 3300)