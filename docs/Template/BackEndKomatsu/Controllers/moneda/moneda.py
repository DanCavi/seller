from flask import Flask, request, jsonify
#Importar la conexión a base de datos
from dataBase.dbConn import  get_session
#importar models
from models.reactFlow import Moneda
from sqlalchemy.orm import joinedload



def get_all_moneda(id):
    try:
        #obtener datos por id de usuario
        with get_session() as session:
            moneda = session.query(Moneda).filter(Moneda.ID_MONEDA == id).all()
            if not Moneda:
                return jsonify({"message":"Moneda no encontrada"}),404
            else:

                moneda_json = [{
                    "ID_MONEDA"     : Moneda.ID_MONEDA,
                    "NOMBRE"           : Moneda.NOMBRE,
                    "ABREVIACION"  : Moneda.AVREVIACION,
                    "IS_WS"    : Moneda.IS_WS,
                }
                for Moneda in moneda
                ]
                session.close()
                return moneda_json    
    except Exception as error:
        return jsonify({
            "message" : "Error al intentar traer los scripts",
            "status"  : 405,
            "error"   : str(error)
        })