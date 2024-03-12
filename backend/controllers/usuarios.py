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
    try:
        with getSession() as session:
            result = session.execute(
                select(Perfil.nombre)
            )
            perfiles = result.scalars().all()
            keys_list = Usuario.__table__.columns.keys()
            keys_list = [key.capitalize() for key in keys_list if key not in ["password", 'usuario_id', 'perfil_id', 'digito_verificador']]
            keys_list.append(perfiles)
            return jsonify(keys_list)
    except Exception as e:
        return jsonify([{"message": "No connection to db "}, {"error": str(e)}])
            

def addUsuario():
    """Crea un nuevo usuario"""
    try:
        with getSession() as session:
            rut_dict = validaRut(request.json["rut"])
            if rut_dict is None:
                return jsonify([{"message": "Rut invalido."}]), 400
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
            if (request.json["action"] == 'block'):
                usuario = session.scalar(
                    select(Usuario).where(Usuario.usuario_id == id)
                )
                usuario.estado = "Activo" if usuario.estado == "Bloqueado" else "Bloqueado"
                session.commit()
                return jsonify({"message": "Operacion exitosa"}), 200
            if (request.json["action"] == 'edit'):
                result = getUsuario(id)
                if result is None:
                    return jsonify([{"message": "No se encontro el usuario"}]), 404
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
            if (request.json["action"] == 'reset'):
                usuario = session.scalar(
                    select(Usuario).where(Usuario.usuario_id == id)
                )
                usuario.password = "pass"
                session.commit()
                return jsonify({"message": "Operacion exitosa"}), 200
                
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}]), 500


def deleteUsuario(id):
    """Borra un usuario"""
    try:
        with getSession() as session:
            idd = id
            idd.strip()
            return "TODO"
    except Exception as e:
        return jsonify([{"message": "Unknown error"}, {"error": str(e)}])
