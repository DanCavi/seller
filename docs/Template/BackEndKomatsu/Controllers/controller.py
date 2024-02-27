import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
#Importar la conexión a base de datos
from dataBase.dbConn import  get_session
from models.reactFlow import Deudores
#importar FTP librerias
from ftplib import FTP
import pandas as pd


UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf','xls','xlsx'}

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024 * 1024
########################### Traer Todos los scripts ####################################
def allowed_file(file):
    return '.' in file and file.rsplit('.',1)[1].lower() in ALLOWED_EXTENSIONS


def upLoad_file(id):
    try:
        print(f"datos desde front: {request.form}")
        #Obtener fecha de registro desde request      
        fecha_registro = request.form.get('fecha_registro')
        #Obtener nombre de columnas en el archivo
        nombre         = request.form.get('nombre')  
        apellido       = request.form.get('apellido')
        dni_deudor     = request.form.get('dni')
        correo_deudor  = request.form.get('correo')
        telefono       = request.form.get('telefono_contacto')
        tipo_de_deuda  = request.form.get('tipo_de_dauda')
        estado_deuda   = request.form.get('estado_deuda')
        monto_de_deuda = request.form.get('monto_de_deuda')

        #comprobar si hay campos que falten fields
        missing_fields = []
        #condicional para revisar envio de datos 
        if not fecha_registro:
            missing_fields.append("fecha_registro")
        if not nombre:
            missing_fields.append("nombre")
        if not apellido:
            missing_fields.append("apellido")
        if not dni_deudor:
            missing_fields.append("dni")
        if not correo_deudor:
            missing_fields.append("correo")
        if not telefono:
            missing_fields.append("telefono_contacto")
        if not tipo_de_deuda:
            missing_fields.append("tipo_de_deuda")  
        if not estado_deuda:
            missing_fields.append("estado_deuda")  
        if not monto_de_deuda:
            missing_fields.append("monto_deuda")        

        if missing_fields:
            return jsonify({
                "message" : f"No se ingresaron todos los campos necesarios, Fatal : {', '.join(missing_fields)} "
            })              
        # if not fecha_registro or not apellido or not dni_deudor or not telefono or not correo_deudor or not nombre:
        #     return jsonify({
        #         "message" : "No se ingresaron todas las cabeceras",
        #         "status" : 400
        #     })
        #Comprobar si el archivo viene en el request
        if 'upload'  not in request.files:
            return jsonify({"message":"No se encontró ningún archivo para subir", "status":401})
        
        file = request.files['upload']
        if file.filename == '':
            return jsonify({"message": "No se seleccionó ningún archivo", "status":404})
        
        if file and allowed_file(file.filename):
            #GUARDAR ARCHIVO EN EL SISTEMA DE ARCHIVOS
            filename  = secure_filename(file.filename)
            print(f"File : {file} Filename : {file.filename}")
            #file_path = os.path.join(app.config["UPLOAD_FOLDER"],filename)           
            file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
            #File.save('uploads' + file.filename)

            #Procesar el archivo
            if file.filename.lower().endswith('.csv'):
                df = pd.read_csv(app.config["UPLOAD_FOLDER"])
                print(f"Lectura archivo csv : {df}")
                return jsonify({
                    "message" : "lectura exitosa de datos",
                    "status" : 200,
                    "data" : str(df)
                   
                })
            elif file.filename.lower().endswith(('.xls','.xlsx')):
                file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
                df = pd.read_excel(file_path)
                print(f"df excel : {df}")
                
                with get_session() as session:
                    #insertar datos en la base de datos
                    for index , row in df.iterrows():
                        #Crear la instrucción de inserción 
                        nuew_deudor = Deudores(
                            nombre              = row[nombre], 
                            apellido            = row[apellido],
                            dni                 = row[dni_deudor],
                            correo              =row[correo_deudor],
                            telefono_contacto   = row[telefono],
                            id_usuario          = id,
                            fecha_registro      = fecha_registro
                            )
                        session.add(nuew_deudor)
                    session.commit()
                    session.close()
                    return jsonify({
                        "message" : "lectura exitosa de datos",
                        "status" : 200,
                        "data" : str(df)
                    
                })
            elif file.filename.lower().endswith('.txt'):                
                with open(file_path, 'r') as txt_file:
                    contenido = txt_file.read()
                    lineas = contenido.split('\n')
                    df = lineas
                    print(f"df Lineas txt : {df}")
                return jsonify({
                    "message" : "lectura exitosa de datos",
                    "status" : 200,
                    "data" : str(df)
                    
                })
            else:
                df = pd.DataFrame()
        else:
            return jsonify({"message": "Extensión de archivo no permitida" , "status": 400})       
    
    except Exception as error:
        return jsonify({"message": "Error fatal al subir archivo", "status":500,"Error": str(error)})       
  
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
        #ftp_puerto      = datos_conexion["puerto"]

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