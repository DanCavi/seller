from flask import Blueprint, request

from controllers.perfiles_usuario import *

perfiles_usuario_blueprint = Blueprint("perfiles-usuario", __name__)

@perfiles_usuario_blueprint.route("/perfiles-usuario", methods=["GET", "POST"])
def group_perfiles_usuario():
    if request.method == "GET":
        return getPerfiles()
    if request.method == "POST":
        return addPerfil()

@perfiles_usuario_blueprint.route("/perfiles-usuario/<int:id>", methods=["DELETE", "PATCH", "GET"])
def item_perfiles_usuario(id):
    if request.method == "GET":
        return 'getPerfil(id)'
    if request.method == "DELETE":
        return deletePerfil(id)
    if request.method == "PATCH":
        return setPerfil()
