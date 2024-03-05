from database.database import getSession
from models.models import Usuario
from sqlalchemy import select, insert, update
from flask import request, jsonify
from utils.rut import validaRut


def getUsuarios():
    """Obtiene todos los datos de la tabla perfil y lo regresa como dict"""
    try:
        with getSession() as session:
            result = session.scalars(select(Usuario))
            if result:
                user_dict = [user.to_dict() for user in result]
                return jsonify(user_dict)
            return jsonify({"message": "No existen usuarios"})
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}])


def getUsuario(id):
    """Obtiene los datos del usuario filtrando por id"""
    try:
        with getSession() as session:
            query = select(Usuario).where(Usuario.usuario_id == id)
            result = session.scalar(query)
            result = result.to_dict()
        return result
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}])


def getColumns():
    """Trae el nombre de las columnas de la tabla"""
    keys_list = list(Usuario.__table__.columns.keys())
    keys_list.pop(keys_list.index("usuario_id"))
    keys_list.pop(keys_list.index("password"))
    keys_list.pop(keys_list.index("perfil_id"))
    keys_list.pop(keys_list.index("digito_verificador"))
    keys_list.pop(keys_list.index("estado"))
    keys_list = [keys.title() for keys in keys_list]
    return jsonify(keys_list)


def addUsuario():
    """Crea un nuevo usuario"""
    try:
        with getSession() as session:
            rut_dict = validaRut(request.json["rut"])
            if rut_dict is None:
                return jsonify([{"message": "Rut invalido."}])
            request.json["rut"], request.json["digito_verificador"] = rut_dict
            session.execute(insert(Usuario), request.json)
            session.commit()
            last_row = session.scalar(
                select(Usuario).order_by(Usuario.usuario_id.desc()).limit(1)
            )
            last_row = last_row.to_dict()
            last_row.pop("password")
            return jsonify(last_row)
    except Exception as e:
        if "IntegrityError" in str(e):
            return jsonify([{"message": "El usuario ya existe."}])
        if "OperationalError" or "DataError" in str(e):
            return jsonify([{"message": "Llene todos los campos correctamente."}])
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}])


def setUsuario(id):
    """Actualiza los datos de un usuario"""
    try:
        with getSession() as session:
            if request.json["action"]:
                print(request.json)
                usuario = session.scalar(
                    select(Usuario).where(Usuario.usuario_id == id)
                )
                usuario.estado = "Bloqueado"
                session.commit()

                return usuario.to_dict()
            else:
                result = session.scalar(select(Usuario).where(Usuario.usuario_id == id))
                if result is None:
                    return jsonify([{"message": "No se encontro el usuario"}])
                rut_dict = validaRut(request.json["rut"])
                if rut_dict is None:
                    return jsonify([{"message": "Rut invalido."}])

                request.json["rut"], request.json["digito_verificador"] = rut_dict
                session.execute(
                    update(Usuario).where(Usuario.usuario_id == id), request.json
                )
                session.commit()
                result = session.scalar(select(Usuario).where(Usuario.usuario_id == id))
                return result.to_dict()
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}])


def deleteUsuario(id):
    """Borra un usuario"""
    try:
        with getSession() as session:
            return "Se borró el usuario " + id
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}])
