from flask import Blueprint
from routes.profiles.route_perfiles import route_get_perfiles
from routes.prospectos.route_prospectos import route_get_prospecto, route_get_prospectos

routes = Blueprint("routes", __name__)


routes.register_blueprint(route_get_perfiles)
routes.register_blueprint(route_get_prospectos)
routes.register_blueprint(route_get_prospecto)
