from flask import Blueprint
from controllers.prospectos.prospectos import getProspectos, getProspecto

route_get_prospectos = Blueprint("get_prospectos", __name__)
route_get_prospecto = Blueprint("get_prospecto", __name__)

@route_get_prospectos.route("/prospectos", methods=["GET"])
def route_get_prospectos_():
    return getProspectos()

@route_get_prospecto.route("/prospectos/<int:id>", methods=["GET"])
def route_get_prospecto_(id):
    return getProspecto(id)