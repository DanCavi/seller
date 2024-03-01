from flask import Blueprint
from controllers.ejecutivos.ejecutivos import getEjecutivos

route_get_ejecutivos = Blueprint("get_ejecutivos", __name__)

@route_get_ejecutivos.route("/ejecutivos", methods=["GET"])
def route_get_ejecutivos_():
    return getEjecutivos()