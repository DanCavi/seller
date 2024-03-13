from database.database import getSession
from models.models import Usuario, Perfil
from sqlalchemy import select
from flask import jsonify


def getEjecutivos():
    """Obtiene todos los datos de la tabla perfil y lo regresa como dict"""
    try:
        with getSession() as session:
            result = session.execute(
                select(
                    Usuario.usuario_id,
                    Usuario.nombre,
                    Usuario.apellido,
                    Perfil.nombre.label('perfil')
                )
                .join(Usuario.perfil, isouter=True)
                .where(Perfil.ejecutivo == True)
            )
            if result:
                return jsonify([row._asdict() for row in result])
            return jsonify({"message": "No existen usuarios"}), 404
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}]), 500

def getEjecutivo(id):
    try:
        with getSession() as session:
            result = session.execute(
                select(
                    Usuario.usuario_id,
                    Usuario.nombre,
                    Usuario.apellido,
                    Perfil.nombre.label('perfil'),
                    Usuario.rut,
                    Usuario.digito_verificador
                )
                .join(Usuario.perfil, isouter=True)
                .where(Usuario.usuario_id == id and Perfil.ejecutivo == True)
            )
            if result:
                return jsonify(result.first()._asdict())
            return jsonify({"message": "No existe el usuario"}), 404
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}]), 500