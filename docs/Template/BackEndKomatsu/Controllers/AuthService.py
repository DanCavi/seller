from dataBase.dbConn import get_session
from flask import jsonify

#import Models
from models.usuarios import Users
#Errors


class AuthService():    
    @classmethod
    def login_user(cls, user):
        try:
            session             = get_session()
            
            authenticated_user  = None
            result = session.execute('call sp_verifyIdentity(%s,%s)', (user.username, user.password))
                
            for row in result.fetchall():
                    authenticated_user = Users(int(row[0], row[1], None, row[2]))
            
        except Exception as error:
            return jsonify( f"error al validar datos en base de datos : {error}")
        finally:
             session.close()