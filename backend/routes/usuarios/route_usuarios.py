from flask import Blueprint
from controllers.usuarios.usuarios import getUsuarios, getColumns, setUsuario, updateUsuario

route_get_usuarios = Blueprint("get_usuarios", __name__)
route_get_usuarios_columns = Blueprint("get_usuarios_columns", __name__)
route_set_usuario = Blueprint("set_usuario", __name__)
route_update_usuario = Blueprint("update_usuario", __name__)


@route_get_usuarios.route("/usuarios", methods=["GET"])
def route_get_usuarios_():
    return getUsuarios()


@route_set_usuario.route("/usuarios", methods=["POST"])
def route_set_usuario_():
    return setUsuario()


@route_update_usuario.route("/usuarios/<int:id>", methods=["PATCH"])
def route_update_usuario_(id):
    return updateUsuario(id)


@route_get_usuarios_columns.route("/usuarios/columns", methods=["GET"])
def route_get_usuarios_columns_():
    return getColumns()
