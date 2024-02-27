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
            empresas = session.query(Empresa).filter(Empresa.ID_EMPRESA == id).all()
            if not empresas:
                return jsonify({"message":"Empresa no encontrada"}),404
            else:

                empresas_json = [{
                    "ID"            : empresa.ID_EMPRESA,
                    "RUT"           : empresa.RUT,
                    "RAZON_SOCIAL"  : empresa.RAZON_SOCIAL,
                    "NOMBRE_FANTASIA"    : empresa.NOMBRE_FANTASIA
                }
                for empresa in empresas
                ]
                session.close()
                return jsonify(empresas_json)    
    except Exception as error:
        return jsonify(f"Error al obtener datos : {error}")