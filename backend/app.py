from flask import Flask
from flask_cors import CORS
import json
from controllers.usuarios.usuarios import getUsers, getUser
from routes.routes import routes

app = Flask(__name__)
CORS(app)

app.register_blueprint(routes, url_prefix="/api/v1")


@app.route("/users", methods=["GET"])
def usersToJson():
    jsondata = getUsers()
    return json.dumps(jsondata)


@app.route("/users/<int:id>", methods=["GET"])
def userToJson(id):
    jsondata = getUser(id)
    return json.dumps(jsondata)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3300)
