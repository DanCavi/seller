from flask import Flask
from flask_cors import CORS
import json
from routes.profiles.route_perfiles import route_get_perfiles
from controllers.usuarios.usuarios import getUsers, getUser
from routes.prospectos.route_prospectos import route_get_prospecto, route_get_prospectos

app = Flask(__name__)
CORS(app)

app.register_blueprint(route_get_perfiles)
app.register_blueprint(route_get_prospectos)
app.register_blueprint(route_get_prospecto)


@app.route("/users", methods=["GET"])
def usersToJson():
    jsondata = getUsers()
    return json.dumps(jsondata)

@app.route("/users/<int:id>", methods=["GET"])
def userToJson(id):
    jsondata = getUser(id)
    return json.dumps(jsondata)

# @app.route("/prospectos", methods=["GET"])
# def prospectosToJson():
#     jsondata = getProspectos()
#     return json.dumps(jsondata)

# @app.route("/prospectos/<int:id>", methods=["GET"])
# def prospectoToJson(id):
#     jsondata = getProspecto(id)
#     return json.dumps(jsondata)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port = 3300)