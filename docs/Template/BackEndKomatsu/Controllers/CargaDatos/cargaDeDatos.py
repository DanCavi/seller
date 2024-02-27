import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
#Importar la conexión a base de datos
from dataBase.dbConn import  get_session
#importar FTP librerias
from ftplib import FTP



UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf','xls'}


app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024 * 1024
########################### Traer Todos los scripts ####################################
def allowed_file(file):
    return '.' in file and file.rsplit('.',1)[1].lower() in ALLOWED_EXTENSIONS

def upLoad_file():
    try:        
        #comprobar si el archivo viene en el request
        if 'upload'  not in request.files:
            return jsonify({"message":"No se encontró ningún archivo para subir", "status":401})
        
        file = request.files['upload']
        if file.filename == '':
            return jsonify({"message": "No se seleccionó ningún archivo", "status":404})
        
        if allowed_file(file.filename):
            #GUARDAR ARCHIVO EN EL SISTEMA DE ARCHIVOS
            filename = secure_filename(file.filename) 
            file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
            #file.save('uploads' + file.filename)
            return jsonify({"message" : "Archivo subido con éxito", "status" : 200}) 
        else:
            return jsonify({"message": "Extensión de archivo no permitida" , "status": 400})       
    
    except Exception as error:
        return jsonify({"message": "Error fatal al subir archivo", "status":500,"Error":error})       
  
################################ Conectarse a Ftp   ##################################
def conectar_ftp():
    try:
        # obtener datos desde el front
        datos_conexion = request.data
        print("datos de conexion :" + '' + datos_conexion)

        #proceso de conexion
        ftp_host        = datos_conexion["host"]
        ftp_user        = datos_conexion["user"]
        ftp_password    = datos_conexion["password"]

        #conectar al servidor FTP
        ftp = FTP(ftp_host)
        conexion = ftp.login(ftp_user, ftp_password)
        if "230" in conexion:            
            return ftp
        else:
            return jsonify({"message": "No se pudo efectuar la conexión", "status": 403})    
    except Exception as error:
        return jsonify({"message": "Problemas al enviar archivos", "status": 404, "Error": error})
    

######################################## LISTAR ARCHIVOS ###################################
def show_files_from_ftp():
    try:
        #Conexion
        ftp = conectar_ftp()        
        if ftp:
            files = ftp.nlst()            
            return jsonify({"message": "Listado exitoso", "status": 200, "data": files})
        else:            
            return jsonify({"message": "problemas de conexion FTP", "status":404})       

    except Exception as error:       
        return jsonify({"message": "Problemas al enviar archivos", "status": 404, "Error": error})
################################    Subir Archivo FTP      #################################
def subir_archivo_ftp():
    try:
        ftp = conectar_ftp()
        if 'upload'  not in request.files:
            return jsonify({"message":"No se encontró ningún archivo para subir", "status":401})
        
        file = request.files['upload']
        if file.filename == '':
            return jsonify({"message": "No se seleccionó ningún archivo", "status":404})
        if ftp and allowed_file(file.filename):
            with open(file, 'rb') as file:
                ftp.storbinary(f'STOR {file}', file)
            
        return jsonify({"message": "Subida de archivo exitosa", "status": 200})
    except Exception as error:
        return jsonify({
            "message": "Error al subir archivo",
            "satatus": 401,
            "Error" : error
        })
    



