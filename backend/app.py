from flask import Flask
from flask_cors import CORS
from routes.routes import routes_blueprint

app = Flask(__name__)
CORS(app)

app.register_blueprint(routes_blueprint, url_prefix="/api/v1")

@app.errorhandler(404)
def page_not_found(error):
    return 'FLASK API'



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3300)
