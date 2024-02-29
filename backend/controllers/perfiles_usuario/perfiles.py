import json
from database.database import getSession
from models.models import Perfil
from sqlalchemy import select




def getPerfiles():
    '''Obtiene todos los datos de la tabla perfil y lo regresa como un diccionario'''
    try:
        with getSession() as session:
            result = session.scalars(select(Perfil))
            if result:
                profile_dict = [profile.to_dict() for profile in result]
                return json.dumps(profile_dict)
            return json.dumps({'message': 'No existen perfiles'})
    except Exception as e:
        return json.dumps({'message': 'No connection to db '})
    
