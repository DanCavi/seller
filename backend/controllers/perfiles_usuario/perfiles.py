from database.database import getSession
from models.models import Perfil
from sqlalchemy import select
import json




def getPerfiles():
    '''Obtiene todos los datos de la clase Perfil'''
    try:
        with getSession() as session:
            result = session.scalars(select(Perfil))
            if result:
                profile_dict = [profile.to_dict() for profile in result]
                return json.dumps(profile_dict)
            return json.dumps({'message': 'No existen perfiles'})
    except Exception as e:
        return json.dumps([{'message': 'No connection to db '}, {'error': str(e)}])
    
