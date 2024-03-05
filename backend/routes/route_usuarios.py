from flask import Blueprint, request
from controllers.usuarios import *

usuarios_blueprint = Blueprint("get_usuarios", __name__)

@usuarios_blueprint.route("/usuarios", methods=["GET", "POST"])
def group_usuarios():
    if request.method == "GET":
        return getUsuarios()
    if request.method == "POST":
        return addUsuario()
    
@usuarios_blueprint.route("/usuarios/<int:id>", methods=["DELETE", "PATCH", "GET"])
def item_usuarios(id):
    if request.method == "GET":
        return getUsuario(id)
    if request.method == "DELETE":
        return deleteUsuario(id)
    if request.method == "PATCH":
        return setUsuario(id)

@usuarios_blueprint.route("/usuarios/columns", methods=["GET"])
def columns_usuarios():
    return getColumns()