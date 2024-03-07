from database.database import getSession
from models.models import Usuario, Perfil
from sqlalchemy import select, insert, update
from flask import request, jsonify
from utils.rut import validaRut


def getUsuarios():
    """Obtiene todos los datos de la clase Usuario"""
    try:
        with getSession() as session:
            result = session.execute(
                select(
                    Usuario.usuario,
                    Usuario.usuario_id,
                    Usuario.nombre,
                    Usuario.apellido,
                    Usuario.rut,
                    Usuario.digito_verificador,
                    Perfil.nombre.label('perfil_nombre'),
                    Usuario.estado,
                )
                .join(Usuario.perfil, isouter=True)
                .order_by(Usuario.usuario_id)
            )
            if result:
                return jsonify([row._asdict() for row in result])
            return jsonify({"message": "No existen usuarios"})
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}])


def getUsuario(id):
    """Obtiene los datos del usuario filtrando por id"""
    try:
        with getSession() as session:
            result = session.scalar(select(Usuario).where(Usuario.usuario_id == id))
        return result.to_dict()
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}])


def getColumns():
    """Trae el nombre de las columnas de la tabla"""
    keys_list = list(Usuario.__table__.columns.keys())
    keys_list = [key.title() for key in keys_list if key not in ["usuario_id", "password", "perfil_id", "digito_verificador", "estado"]]
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
                usuario = session.scalar(
                    select(Usuario).where(Usuario.usuario_id == id)
                )
                usuario.estado = "Activo" if usuario.estado == "Bloqueado" else "Bloqueado"
                session.commit()
                return usuario.to_dict()
            else:
                result = getUsuario(id)
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
            idd = id
            idd.strip()
            return "TODO"
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}])
