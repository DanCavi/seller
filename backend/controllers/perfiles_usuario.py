from database.database import getSession
from models.models import Perfil
from sqlalchemy import select, insert, update, delete
from flask import request, jsonify


def getPerfiles():
    """Obtiene los datos de la clase Perfil"""
    try:
        with getSession() as session:
            result = session.execute(
                select(Perfil.perfil_id, Perfil.nombre).order_by(Perfil.perfil_id)
            )
            if result:
                return jsonify([row._asdict() for row in result]), 200
            return jsonify([{"message": "No existen perfiles"}]), 404
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}]), 500


def addPerfil():
    """Crea un nuevo perfil"""
    try:
        with getSession() as session:
            session.execute(insert(Perfil), request.json)
            session.commit()
            return jsonify([{'message': 'Perfil guardado correctamente'}]), 200
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}]), 500


def deletePerfil(id):
    """Borra un perfil"""
    try:
        with getSession() as session:
            session.execute(delete(Perfil).where(Perfil.perfil_id == id))
            session.commit()
            return jsonify([{'message': 'Se borró el perfil correctamente'}]), 200
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}]), 500


def setPerfil(id):
    """Actualiza los datos de un perfil"""
    try:
        with getSession() as session:
            session.execute(update(Perfil).where(Perfil.perfil_id == id), request.json)
            session.commit()
            return jsonify([{'message': 'Se actualizo el perfil'}]), 200
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}]), 500

def getPerfil(id):
    '''Obtiene un perfil por id'''
    try:
        with getSession() as session:
            result = session.scalar(select(Perfil).where(Perfil.perfil_id == id))
            result = result.to_dict()
        return result
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}]), 500