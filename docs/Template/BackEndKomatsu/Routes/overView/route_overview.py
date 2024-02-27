from flask import Blueprint, request, jsonify

# Importacion de Controladores.
from Controllers.overView.overView import get_all_distributor, save_all_data

route_get_all_distributor = Blueprint("obtener_datos_distribuidor", __name__)
route_save_data = Blueprint("guardar_datos_overview", __name__)


# Recibir resultados totales de recorrido
@route_get_all_distributor.route("/get", methods=["GET"])
def route_get_all_distributor_():
    return get_all_distributor()


# Guardar los datos del distribuidor
@route_save_data.route("/save", methods=["PUT"])
def route_save_data_():
    return save_all_data()
