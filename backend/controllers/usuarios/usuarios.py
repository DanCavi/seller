from database.database import getSession
from models.models import Usuario
from sqlalchemy import select, insert, update
from flask import request
from utils.rut import validaRut
import json




def getUsuarios():
    '''Obtiene todos los datos de la tabla perfil y lo regresa como dict'''
    try:
        with getSession() as session:
            result = session.scalars(select(Usuario))
            if result:
                user_dict = [user.to_dict() for user in result]
                return json.dumps(user_dict)
            return json.dumps({'message': 'No existen usuarios'})
    except Exception as e:
        return json.dumps([{'message': 'No connection to db '}, {'error': str(e)}])

    
def getUsuario(id):
    '''Obtiene los datos del usuario filtrando por id'''
    try:
        with getSession() as session:
            query = select(Usuario).where(Usuario.usuario_id == id)
            result = session.scalar(query)
            result = result.to_dict()
        return result
    except Exception as e:
        return json.dumps([{'message': 'No connection to db '}, {'error': str(e)}])
    
def getColumns():
    '''Trae el nombre de las columnas de la tabla'''
    keys_list = list(Usuario.__table__.columns.keys())
    keys_list.pop(keys_list.index('usuario_id'))
    keys_list.pop(keys_list.index('password'))
    keys_list.pop(keys_list.index('perfil_id'))
    keys_list.pop(keys_list.index('digito_verificador')) 
    keys_list.pop(keys_list.index('estado'))
    keys_list = [keys.title() for keys in keys_list]
    return json.dumps(keys_list)

def setUsuario():
    '''Crea un nuevo usuario'''
    try:
        with getSession() as session:
            rut_dict = validaRut(request.json['rut'])
            if rut_dict is None:
                return json.dumps([{'message': 'Rut invalido.'}])
            request.json['rut'], request.json['digito_verificador'] = rut_dict
            session.execute(insert(Usuario), request.json)
            session.commit()
            last_row = session.scalar(select(Usuario).order_by(Usuario.usuario_id.desc()).limit(1))
            last_row = last_row.to_dict()
            last_row.pop('password')
            return json.dumps(last_row)
    except Exception as e:
        if 'IntegrityError' in str(e):
            return json.dumps([{'message': 'El usuario ya existe.'}])
        if 'OperationalError' or 'DataError' in str(e):
            return json.dumps([{'message': 'Llene todos los campos correctamente.'}])
        return json.dumps([{'message': 'Unknown error'}, {'error': str(e)}])
    
def updateUsuario(id):
    '''Actualiza los datos de un usuario'''
    try:
        with getSession() as session:
            result = session.scalar(select(Usuario).where(Usuario.usuario_id == id))
            if result is None:
                return json.dumps([{'message': 'No se encontro el usuario'}])
            rut_dict = validaRut(request.json['rut'])
            if rut_dict is None:
                return json.dumps([{'message': 'Rut invalido.'}])
            request.json['rut'], request.json['digito_verificador'] = rut_dict
            session.execute(update(Usuario).where(Usuario.usuario_id == id), request.json)
            session.commit()
            result = session.scalar(select(Usuario).where(Usuario.usuario_id == id))
            return result.to_dict()
    except Exception as e:
        return json.dumps([{'message': 'Unknown error'}, {'error': str(e)}])