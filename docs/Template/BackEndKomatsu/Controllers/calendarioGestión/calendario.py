
from flask import Flask, request, jsonify
#Importar la conexión a base de datos
from dataBase.dbConn import  get_session
#importar models
#from models.reactFlow import Calendario

app = Flask(__name__)
########################### Traer todos los clientes asociados al usuario ####################################

def get_all_eventos_calendario():
    return jsonify("ruta get all ok")
    # with get_session() as session:
    #     # session = get_session()        
    #     eventos = session.query(Calendario).filter_by(id_usuario = id)
    #     session.close()

    # eventos_json = [
    #     {
    #         'id'                        : evento.id,
    #         'nombre_evento'             : evento.nombre_evento,
    #         'fecha_inicio'              : evento.fecha_inicio,
    #         'fecha_final'               : evento.fecha_final,
            
    #     }
    #     for evento in eventos 
    # ]

    # return jsonify(eventos_json)

################################# Eliminar un Registro ####################################
# def delete_cliente(id):
#     try:
#         with get_session() as session:
#             cliente = session.query(Calendario).filter_by(id = id).delete()
#             session.commit()
#             session.close()

#         jsonify(f"Cliente eliminado exitosamente : {cliente}")
#     except Exception as error:
#         jsonify(f"Error al eliminar Cliente : {error}")

############################# Editar un registro ############################################

# def edit_cliente(id):
#     try:
#         with get_session() as session:
#             cliente = session.query(Calendario).filter_by(id = id).first()

#             if cliente is not None:
#                 if request.method == 'POST':
#                     #obtener los datos actualizados del formulario
#                     nueva_razon_social = request.data['razon_social']
#                     nuevo_dni          = request.data['dni']
#                     fecha_modificacion = request.data['fecha_modificacion']

#                     if nueva_razon_social != cliente.razon_social or nuevo_dni != cliente.dni:
#                         #actualizar los campos
#                         cliente.razon_social        = nueva_razon_social
#                         cliente.dni                 = nuevo_dni
#                         cliente.fecha_modificacion  = fecha_modificacion

#                         #guardar datos
#                         session.commit()
#                     else:
#                         print("error al realizar sus actualizaciones")
#             else:
#                 return("no se realizaron cambios en sus clientes")              

#         jsonify(f"Edición exitosa, campo agregado:{cliente}")
#     except Exception as error:
#         jsonify(f"Error al editar tus datos : {error}")