from database.database import getSession
from models.models import Prospecto
from sqlalchemy import select


def getProspectos():
    '''Obtiene todos los datos de los prospectos y lo regresa como dict'''
    try:
        with getSession() as session:
            query = select(Prospecto)
            result = session.scalars(query)
            result = [person.to_dict() for person in result]
            return result
    except Exception as e:
        return print(f"Error: {e}")

def getProspecto(id):
    '''Obtiene los datos del prospecto filtrando por id'''
    try:
        with getSession() as session:
            query = select(Prospecto).where(Prospecto.ID == id)
            result = session.scalar(query)
            result = result.to_dict()
        return result
    except Exception as e:
        return print(f"Error: {e}")