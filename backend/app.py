import datetime
import json
from flask import Flask
from sqlalchemy import create_engine


engine = create_engine('mysql+pymysql://root:root@localhost:3306/EC_MaquinaVentas=charset=utf8mb4')

app = Flask(__name__)

conn_params = {
    "user": "root",
    "password": "root",
    "host": "localhost",
    "database": "EC_MaquinaVentas",
    "port": 3306,
}


@app.route("/perfiles-usuario", methods=["GET"])
def index():
    conn = mariadb.connect(**conn_params)

    cur = conn.cursor()

    cur.execute("select * from perfil")

    row_headers = [x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data = []
    for result in rv:

        json_data.append(dict(zip(row_headers, result)))

    return json_data
    conn.close()


@app.route("/")
def hello():
    return "API FLASK"


@app.route("/administrador-script", methods=["GET"])
def getScripts():
    query = """
    select tas.ID as "id", 
        tas.NOMBRE_SCRIPT as "nombre",
        tas.FECHA_CREACION as "creada",
        tf.NOMBRE_SECCION as "funnel-comercial",
        tc.NOM_CANAL as "canal",
        tas.INICIO_VIGENCIA as "inicio-vigencia",
        tas.FIN_VIGENCIA as "fin-vigencia",
        tas.CAMPANIA as "campania",
        concat(u.USU_NOMBRE, ' ', u.USU_APELLIDO) as "autor",
        tes.NOM_ESTADO as "estado",
        tas.ACTIVA as "activa"
    from tbl_admin_scripts tas
        inner join usuario u on tas.AUTOR_ID = u.USU_ID
        inner join tbl_funnelcomercial tf on tas.FUNNEL_ID = tf.ID
        inner join tbl_canal tc on tas.ID_CANAL = tc.ID
        inner join tbl_estado_script tes on tas.ID_ESTADO = tes.ID; 
    """
    conn = mariadb.connect(**conn_params)
    cur = conn.cursor()
    cur.execute(query)

    row_headers = [x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data = []
    for result in rv:

        json_data.append(dict(zip(row_headers, result)))

    return json_data
    conn.close()
