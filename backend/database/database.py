from sqlalchemy import create_engine, inspect
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv(override=True)

db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_host = os.getenv("DB_HOST")
db_port = os.getenv("DB_PORT")
db_name = os.getenv("DB_NAME")

engine = create_engine(
    f"mariadb+mariadbconnector://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"
)


def getSession():
    try:
        Session = sessionmaker(bind=engine)
        return Session()
    except Exception as e:
        return print(f"Error: {e}")
