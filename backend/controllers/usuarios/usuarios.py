from database.database import getSession
from models.models import Usuario
from sqlalchemy import select, insert
from flask import request
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
    # print(json.dumps(Usuario.__table__.columns.keys()))
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
            session.execute(insert(Usuario), request.json)
            session.commit()
            return 'veamos'
    except Exception as e:
        return json.dumps([{'message': 'No connection to db '}, {'error': str(e)}])
    