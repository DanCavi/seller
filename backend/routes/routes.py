from flask import Blueprint
from routes.route_ejecutivos import ejecutivos_blueprint
from routes.route_perfiles_usuario import perfiles_usuario_blueprint
from routes.route_usuarios import usuarios_blueprint
from routes.route_funnel_comercial import funnel_comercial_blueprint



routes_blueprint = Blueprint("routes", __name__)

# Modulo perfiles-usuario
routes_blueprint.register_blueprint(perfiles_usuario_blueprint)

# Modulo usuarios
routes_blueprint.register_blueprint(usuarios_blueprint)

# Modulo ejecutivos
routes_blueprint.register_blueprint(ejecutivos_blueprint)

#Modulo funnel-comercial
routes_blueprint.register_blueprint(funnel_comercial_blueprint)