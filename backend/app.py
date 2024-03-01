from flask import Flask
from flask_cors import CORS
from routes.routes import routes

app = Flask(__name__)
CORS(app)

app.register_blueprint(routes, url_prefix="/api/v1")




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3300)
