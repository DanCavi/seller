from flask import Blueprint
from routes.profiles.route_perfiles import route_get_perfiles
from routes.prospectos.route_prospectos import route_get_prospecto, route_get_prospectos
from routes.usuarios.route_usuarios import route_get_usuarios, route_get_usuarios_columns, route_set_usuario
from routes.ejecutivos.route_ejecutivos import route_get_ejecutivos


routes = Blueprint("routes", __name__)

# Modulo Perfiles
routes.register_blueprint(route_get_perfiles)

# Modulo Prospectos (REVISAR)
routes.register_blueprint(route_get_prospectos)
routes.register_blueprint(route_get_prospecto)

# Modulo Usuarios
routes.register_blueprint(route_get_usuarios)
routes.register_blueprint(route_get_usuarios_columns)
routes.register_blueprint(route_set_usuario)

# Modulo Ejecutivos
routes.register_blueprint(route_get_ejecutivos)
