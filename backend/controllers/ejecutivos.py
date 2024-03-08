from database.database import getSession
from models.models import Usuario, Perfil
from sqlalchemy import select
from flask import jsonify


def getEjecutivos():
    """Obtiene todos los datos de la tabla perfil y lo regresa como dict"""
    try:
        with getSession() as session:
            result = session.scalars(
                select(Usuario, Perfil)
                .join(Usuario.perfil)
                .where(Perfil.ejecutivo == True)
            )
            if result:
                user_dict = [user.to_dict() for user in result]
                return jsonify(user_dict)
            return jsonify({"message": "No existen ejecutivos"})
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}])
