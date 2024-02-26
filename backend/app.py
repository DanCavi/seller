from flask import Flask
from sqlalchemy import create_engine
from controllers.profiles.perfiles import getPerfiles
from controllers.users.usuarios import getUsers, getUser
from controllers.prospectos.prospectos import getProspectos, getProspecto
import json


engine = create_engine('mysql+pymysql://root:root@localhost:3306/EC_MaquinaVentas=charset=utf8mb4')

app = Flask(__name__)

conn_params = {
    "user": "root",
    "password": "root",
    "host": "localhost",
    "database": "EC_MaquinaVentas",
    "port": 3306,
}


@app.route("/profiles", methods=["GET"])
def profilesToJson():
    jsondata = getPerfiles()
    return json.dumps(jsondata)

@app.route("/users", methods=["GET"])
def usersToJson():
    jsondata = getUsers()
    return json.dumps(jsondata)

@app.route("/users/<int:id>", methods=["GET"])
def userToJson(id):
    jsondata = getUser(id)
    return json.dumps(jsondata)

@app.route("/prospectos", methods=["GET"])
def prospectosToJson():
    jsondata = getProspectos()
    return json.dumps(jsondata)

@app.route("/prospectos/<int:id>", methods=["GET"])
def prospectoToJson(id):
    jsondata = getProspecto(id)
    return json.dumps(jsondata)

# @app.route("/administrador-script", methods=["GET"])
# def getScripts():
#     query = """
#     select tas.ID as "id", 
#         tas.NOMBRE_SCRIPT as "nombre",
#         tas.FECHA_CREACION as "creada",
#         tf.NOMBRE_SECCION as "funnel-comercial",
#         tc.NOM_CANAL as "canal",
#         tas.INICIO_VIGENCIA as "inicio-vigencia",
#         tas.FIN_VIGENCIA as "fin-vigencia",
#         tas.CAMPANIA as "campania",
#         concat(u.USU_NOMBRE, ' ', u.USU_APELLIDO) as "autor",
#         tes.NOM_ESTADO as "estado",
#         tas.ACTIVA as "activa"
#     from tbl_admin_scripts tas
#         inner join usuario u on tas.AUTOR_ID = u.USU_ID
#         inner join tbl_funnelcomercial tf on tas.FUNNEL_ID = tf.ID
#         inner join tbl_canal tc on tas.ID_CANAL = tc.ID
#         inner join tbl_estado_script tes on tas.ID_ESTADO = tes.ID; 
#     """
#     json_data = []

#     return json_data
#     conn.close()
