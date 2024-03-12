from flask import Blueprint, request
from controllers.data_exit import *

data_exit_blueprint = Blueprint("data-exit", __name__)

@data_exit_blueprint.route("/data-exit/perfiles", methods=["GET"])
def perfiles_data_exit():
    if request.method == "GET":
        return getPerfiles()

@data_exit_blueprint.route("/data-exit/tablas", methods=["GET"])
def tablas_data_exit():
    if request.method == "GET":
        return getTablas()

@data_exit_blueprint.route("/data-exit/columns", methods=["GET"] )
def columns_data_exit():
    if request.method == "GET":
        tabla = request.args.get('tbl')
        return getColumns(tabla)
    
@data_exit_blueprint.route('/data-exit/<int:id>', methods=["DELETE", "PATCH", "GET"])
def item_data_exit(id):
    if request.method == "GET":
        return 'getDataExit(id)'
    if request.method == "DELETE":
        return 'deleteDataExit(id)'
    if request.method == "PATCH":
        return 'setDataExit(id)'