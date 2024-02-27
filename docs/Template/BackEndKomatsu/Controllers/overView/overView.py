from flask import Flask, request, jsonify
from datetime import datetime

# Importar la conexión a base de datos
from dataBase.dbConn import get_session

# importar models
from Models.models import Distributor

app = Flask(__name__)
########################### GET DISTRIBUTOR  ####################################


################### Calcular años desde fecha registro a la actual ###########################
def calculate_years_since(date):
    """Calcula cuántos años han pasado desde la fecha dada hasta la fecha actual."""
    current_date = datetime.now()
    years = current_date.year - date.year
    if (current_date.month, current_date.day) < (date.month, date.day):
        years -= 1
    return years


def get_all_distributor():
    """Función Módulo OverView que trae la información de los distribuidores."""
    try:
        # obtener datos por id de usuario
        with get_session() as session:
            distributors = session.query(Distributor).all()
            if not distributors:
                return jsonify({"message": "Empresa no encontrada"}), 404

        distributors_json = [
            {
                "id": distributor.id,
                "nombre": distributor.name,
                "sap_code": distributor.sap_code,
                "unique_rol": distributor.unique_rol,
                "endorsement": distributor.endorsement,
                "group": distributor.group,
                "brands": distributor.brands,
                "product_lines": distributor.product_lines,
                "participation": distributor.participation,
                "partner_shereholder": distributor.partners_shareholder,
                "share": distributor.share,
                "negative_fact": distributor.negative_fact,
                "positive_fact": distributor.positive_fact,
                "year_with_komatsu": calculate_years_since(distributor.fecha_registro),
                "payment_behavior": distributor.payment_behavior,
                "litigation": distributor.litigation,
            }
            for distributor in distributors
        ]

        if not distributors_json:
            return jsonify(
                {
                    "message": "Error al extraer los datos desde la base de datos",
                    "status": 402,
                }
            )
        session.close()
        return jsonify(distributors_json)

    except Exception as err:
        return jsonify(
            {"message": "Error al procesar datos", "status": 501, "error": str(err)}
        )


#################################### SAVE ALL DATA #####################################
def save_all_data():
    """
    Función para guardar datos del distribuidor.
    """
    try:
        data = request.json
        print(f"data : {data}")
        if not data:
            return jsonify({"message": "No hay datos para insertar", "status": 402})
        else:
            # conectarse a la base de datos
            with get_session() as session:
                distribuidor = session.query(Distributor).get(data["id"])
                # Actualiza los campos con los nuevos datos
                for key, value in data.items():
                    setattr(distribuidor, key, value)

                session.commit()
                session.close()
                return jsonify(
                    {
                        "message": "Proceso de datos Exitoso",
                        "status": 200,
                    }
                )
    except Exception as err:
        return jsonify(
            {"message": "Error al procesar datos", "status": 501, "Error": str(err)}
        )
