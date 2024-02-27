from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from dotenv import load_dotenv
import os

######################### CONEXION A LA BASE DE DATOS DEFINITIVA #####################
# #conexion a base de datos Maria Db
# #Datos desde env
# load_dotenv()
# db_host     = os.getenv('DB_HOST')
# db_port     = os.getenv('DB_PORT')
# db_name     = os.getenv('DB_NAME')
# db_user     = os.getenv('DB_USER')
# db_password = os.getenv('DB_PASSWORD')

# engine = create_engine(f'mariadb+mariadbconnector://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

# def get_session():
#     try:
#         Session = sessionmaker(bind=engine)
#         return Session()
#     except Exception as error:
#         return print(f"error al conectarse a la base de datos :{error}")


########################## CONEXION PARA AREA LOCAL ####################
# conexion a base de datos Example
engine = create_engine("mysql+pymysql://root:@localhost/komatsu")


def get_session():
    try:
        Session = sessionmaker(bind=engine)
        return Session()
    except Exception as error:
        return print(f"error al conectarse a la base de datos :{error}")
