from database.database import getSession
from models.models import FunnelComercial
from sqlalchemy import select, insert, update, delete
from flask import request, jsonify

def getFunnel():
    try:
        with getSession() as session:
            result = session.execute(select(FunnelComercial.funnel_comercial_id, FunnelComercial.orden, FunnelComercial.nombre, FunnelComercial.fecha_creacion, FunnelComercial.requisito).order_by(FunnelComercial.orden))
            if result:
                return jsonify([row._asdict() for row in result]), 200
            return jsonify([{"message": "No funnel found"}]), 404
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}])

def addFunnel():
    try:
        with getSession() as session:
            session.execute(insert(FunnelComercial), request.json)
            session.commit()
            return jsonify([{'message': 'Funnel guardado correctamente'}])
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}]), 500