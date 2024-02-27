from flask import Blueprint, request, jsonify

# Importacion de Controladores.
from Controllers.EmptyingMaintenance.EmptyingMaintenance import (
    get_last_year_data,
    save_dato,
)

route_get_emptying_maintenance = Blueprint(
    "obtener_datos_financiero_distribuidor", __name__
)

route_save_new_balance = Blueprint("guardar_balance_", __name__)


# Recibir resultados totales de recorrido
@route_get_emptying_maintenance.route("/get", methods=["POST"])
def route_get_emptying_maintenance_():
    return get_last_year_data()


# Guardar balance nuevo
@route_save_new_balance.route("/save", methods=["POST"])
def route_save_new_balance_():
    return save_dato()
