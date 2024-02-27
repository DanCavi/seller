from flask import Flask
from flask_cors import CORS

"""
Nota : importaciones de rutas desde archivo routes. cada segmento de importaciones es un módulo especifico
estan desde la linea 10 a la linea 81
la estructura del endpoint es : dashboard/modulo/accion/<id si es necesario>

en este archivo también se encuentra la configuración de CORS con cada segmento de modulo. la puede encontrar de la linea 91 a la 114.
Luego de los CORS estan las rutas con su prefijo, se agrupan por modulos para tener orden de cada ruta.
"""
################################ IMPORTACIONES OVERVIEW #############################################
from Routes.overView.route_overview import route_get_all_distributor, route_save_data

################################# EMPTYING MAINTENANCE ###########################
from Routes.EmptyingMaintenance.route_emptyingMaintenance import (
    route_get_emptying_maintenance,
    route_save_new_balance,
)

app = Flask(__name__)

# URL inicial y comprobar token
# configurar la extensión Flask JWT- extended
# app.config["JWT_SECRET_KEY"] = "super-secret" #palabra para pruebas

url_front = "http://localhost:3000/"
CORS(app)

# Configuracion CORS para permitir solicitudes desde http://localhost:3000
CORS(app, resources={r"/*": {"origins": url_front}})
CORS(app, resources={r"/over-view/*": {"origins": url_front}})
CORS(app, resources={r"/emptying-maintenance/*": {"origins": url_front}})
# CORS(app, resources={r"/dashboard/historico-cliente/*"      :{"origins": url_front}})
# CORS(app, resources={r"/dashboard/historico-carga/*"        :{"origins": url_front}})

# CORS(app, resources={r"/login/*"               :{"origins": url_front}})


######################## Rutas Prefijos ##########################################
# Main
# app.register_blueprint(route_validar_token,  url_prefix  ="/")

####################### Rutas OverView ###############################################
app.register_blueprint(route_get_all_distributor, url_prefix="/over-view/")
app.register_blueprint(route_save_data, url_prefix="/over-view/")

######################### Rutas Emptying Maintenance ##########################
app.register_blueprint(
    route_get_emptying_maintenance, url_prefix="/emptying-maintenance/"
)
app.register_blueprint(route_save_new_balance, url_prefix="/emptying-maintenance/")


# ===================================|| Auth ||============================================#
# app.register_blueprint(route_test_token,                     url_prefix ="/login/")
# app.register_blueprint(route_current_user,                   url_prefix ="/login/")


if __name__ == "__main__":
    app.run(port=3300)
