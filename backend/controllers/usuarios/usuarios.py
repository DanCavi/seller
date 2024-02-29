from database.database import getSession
from models.models import User
from sqlalchemy import select
import json




def getUsers():
    '''Obtiene todos los datos de la tabla perfil y lo regresa como dict'''
    try:
        with getSession() as session:
            query = select(User)
            result = session.scalars(query)
            result = [person.to_dict() for person in result]
            return result
    except Exception as e:
        return json.dumps({'message': 'No connection to db '})

    
def getUser(id):
    '''Obtiene los datos del usuario filtrando por id'''
    try:
        with getSession() as session:
            query = select(User).where(User.USU_ID == id)
            result = session.scalar(query)
            result = result.to_dict()
        return result
    except Exception as e:
        return json.dumps({'message': 'No connection to db '})