from database.database import getSession
from models.models import Perfil, Base
from sqlalchemy import select
from flask import jsonify

def getPerfiles():
    try:
        with getSession() as session:
            result = session.execute(select(Perfil.nombre, Perfil.perfil_id))
            return jsonify([row._asdict() for row in result]), 200
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}]), 500
    
def getTablas():
    try:
        tables = Base.metadata.tables.keys()
        print(Base.metadata.tables.get('perfil').columns.keys())
        return jsonify(list(tables)), 200
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}]), 500

def getColumns(tabla):
    try:
        columns = Base.metadata.tables.get(tabla).columns.keys()
        return jsonify(columns)
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}]), 500