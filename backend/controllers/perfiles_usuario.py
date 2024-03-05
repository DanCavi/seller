from database.database import getSession
from models.models import Perfil
from sqlalchemy import select, insert
from flask import request, jsonify


def getPerfiles():
    """Obtiene los datos de la clase Perfil"""
    try:
        with getSession() as session:
            result = session.execute(
                select(Perfil.perfil_id, Perfil.nombre).order_by(Perfil.perfil_id)
            )
            if result:
                return jsonify([row._asdict() for row in result])
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}])


def addPerfil():
    """Crea un nuevo perfil"""
    try:
        with getSession() as session:
            session.execute(insert(Perfil), request.json)
            session.commit()
            return 'Se guardó el perfil, creo...'
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}])


def deletePerfil(id):
    """Borra un perfil"""
    try:
        with getSession() as session:
            perfil = session.get(Perfil, id)
            session.delete(perfil)
            session.commit()
            return "Y se perdió el perfil"
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}])


def setPerfil(id):
    """Actualiza los datos de un perfil"""
    try:
        with getSession() as session:
            return "Setting..." + id
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}])
