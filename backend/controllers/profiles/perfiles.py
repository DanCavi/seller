from database.database import getSession
from models.models import Perfil
from sqlalchemy import select




def getPerfiles():
    '''Obtiene todos los datos de la tabla perfil y lo regresa como un diccionario'''
    try:
        with getSession() as session:
            query = select(Perfil)
            result = session.scalars(query)
            result = [person.to_dict() for person in result]
            return result
    except Exception as e:
        return print(f"Error: {e}")
    
