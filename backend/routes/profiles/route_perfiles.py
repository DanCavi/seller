from flask import Blueprint

from controllers.perfiles_usuario.perfiles import getPerfiles

route_get_perfiles = Blueprint("get_perfiles", __name__)

@route_get_perfiles.route("/perfiles-usuario", methods=["GET"])
def route_get_perfiles_():
    return getPerfiles()