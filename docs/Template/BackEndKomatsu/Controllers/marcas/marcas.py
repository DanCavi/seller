from flask import Flask, request, jsonify
#Importar la conexión a base de datos
from dataBase.dbConn import  get_session
#importar models
from models.reactFlow import marcas
from sqlalchemy.orm import joinedload



def get_all_marcas(id):
    try:
        #obtener datos por id de usuario
        with get_session() as session:
            marcas = session.query(marcas).filter(marcas.ID_MARCAS == id).all()
            if not marcas:
                return jsonify({"message":"Marca no encontrada"}),404
            else:

                marcas_json = [{
                    "ID_MARCAS"     : marcas.ID_MARCAS,
                    "NOMBRE"           : marcas.NOMBRE,
                    "RAZON_SOCIAL"  : marcas.RAZON_SOCIAL,
                    "NOMBRE_FANTASIA"    : marcas.NOMBRE_FANTASIA,
                }
                for marcas in marcas
                ]
                session.close()
                return marcas_json    
    except Exception as error:
        return jsonify({
            "message" : "Error al intentar traer los scripts",
            "status"  : 405,
            "error"   : str(error)
        })