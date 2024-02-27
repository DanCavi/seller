from flask import Flask, request, jsonify
#Importar la conexión a base de datos
from dataBase.dbConn import  get_session
#importar models
from models.reactFlow import Empresa
from sqlalchemy.orm import joinedload



def get_all_empresas(id):
    try:
        #obtener datos por id de usuario
        with get_session() as session:
            empresa = session.query(Empresa).filter(Empresa.ID_EMPRESA == id).all()
            if not empresa:
                return jsonify({"message":"Empresa no encontrada"}),404
            else:

                empresa_json = [{
                    "ID_EMPRESA"     : empresa.ID_EMPRESA,
                    "RUT"           : empresa.RUT,
                    "RAZON_SOCIAL"  : empresa.RAZON_SOCIAL,
                    "NOMBRE_FANTASIA"    : empresa.NOMBRE_FANTASIA,
                }
                for empresa in empresa
                ]
                session.close()
                return empresa_json    
    except Exception as error:
        return jsonify({
            "message" : "Error al intentar traer los scripts",
            "status"  : 405,
            "error"   : str(error)
        })