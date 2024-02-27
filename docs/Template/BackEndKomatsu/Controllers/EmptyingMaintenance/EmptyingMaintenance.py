from flask import Flask, request, jsonify
from datetime import datetime, timedelta
from sqlalchemy import and_, desc

# Importar la conexión a base de datos
from dataBase.dbConn import get_session

# importar models
from Models.models import Distributor, Balances

app = Flask(__name__)


########################### GET DATA LAST YEAR   ####################################
def get_last_year_data():
    """Función Módulo Emptying Maintenance: función para traer todos los datos del año anterior
    Args:
    current year: dateTime()
    """
    try:
        data = request.json
        if not data:
            jsonify({"message": "Error al obtener datos", "status": 402})
        else:
            fecha = data["año"]
            format_fecha = datetime.strptime(fecha, "%Y-%m-%d %H:%M:%S")
            print(f"fecha formateada :{format_fecha}")
            fecha_anterior = format_fecha - timedelta(days=365)
            print(f"fecha last year :{fecha_anterior}")
            id_distribuidor = data["id"]
            with get_session() as session:
                balances = (
                    session.query(Balances)
                    .filter(
                        and_(
                            Balances.fecha_registro <= format_fecha,
                            Balances.fecha_registro >= fecha_anterior,
                            Balances.id_distribuidor == id_distribuidor,
                        )
                    )
                    .order_by(desc(Balances.fecha_registro))
                    .first()
                )
                if not balances:
                    return jsonify(
                        {"message": "Error al extraer los datos", "status": 404}
                    )
                else:
                    activo_circulante_json = {
                        "id": balances.id,
                        "disponible": balances.disponible,
                        "depositos_valores_negociables": balances.depositos_valores_negociables,
                        "documentos_cuentas_por_cobrar": balances.documentos_cuentas_por_cobrar,
                        "AC_cuentas_por_cobrar_empresas": balances.AC_cuentas_por_cobrar_empresas,
                        "existencias": balances.existencias,
                        "otros_activos_circulantes": balances.otros_activos_circulantes,
                    }

                    activo_fijo_json = {
                        "id": balances.id,
                        "bienes_raices": balances.bienes_raices,
                        "vehiculos": balances.vehiculos,
                        "maquinaria_equipos": balances.maquinarias_equipos,
                        "muebles_utiles": balances.muebles_utiles,
                        "otros_activos_fijos": balances.otros_activos_fijos,
                        "depreciacion_acumulada": balances.depreciacion_acumulada,
                    }

                    activo_largo_plazo = {
                        "id": balances.id,
                        "deudores_largo_plazo": balances.deudores_largo_plazo,
                        "inversiones_empresas": balances.inversiones_empresas_relacionadas,
                        "menor_valor_inversiones": balances.menor_valor_inversiones,
                        "mayor_valor_inversiones": balances.mayor_valor_inversiones,
                        "cuentas_por_cobrar_LP": balances.activo_largo_plazo_cuentas_cobrar,
                        "otros_activos_LP": balances.otros_activos_largo_plazo,
                    }

                    pasivo_circulante = {
                        "id": balances.id,
                        "deuda_bancaria_CP": balances.deuda_bancaria_corto_plazo,
                        "porcion_Corriente_LP": balances.porcion_corriente_largo_plazo,
                        "documentos_cuentas_pagar": balances.pasivo_circulante_documentos_cuentas_pagar,
                        "cuentas_por_pagar_empresas": balances.pasivo_circulante_cuentas_pagar_empresas,
                        "impuestos_prevision_pagar": balances.impuestos_previsiones_pagar,
                        "otros_pasivos_circulantes": balances.otros_pasivos_circulantes,
                    }
                    pasivo_LP = {
                        "id": balances.id,
                        "deuda_bancaria_LP": balances.deuda_bancaria_LP,
                        "documentos_pagar": balances.documentos_pagar_LP,
                        "cuentas_pagar_empresas": balances.cuentas_pagar_LP,
                        "otros_PLP": balances.otros_pasivos_LP,
                    }

                    patrimonio = {
                        "id": balances.id,
                        "capital_pagado": balances.capital_pagado,
                        "revalorizacion_capital_propio": balances.revalor_capital_reservas,
                        "utilidad_acumulada": balances.utilidad_acumulada,
                        "utilidad_ejercicio": balances.utilidad_ejercicio,
                        "divid_provisorios": balances.divid_provisorios,
                        "retasacion_tecnica": balances.retasacion_tecnica_activo_fijo,
                        "ajustes_patrimoniales": balances.ajustes_patrimoniales,
                    }

                    return jsonify(
                        {
                            "message": "Extracción de datos exitoso",
                            "status": 200,
                            "activo_circulante": activo_circulante_json,
                            "activo_fijo": activo_fijo_json,
                            "activo_largo_plazo": activo_largo_plazo,
                            "pasivo_circulante": pasivo_circulante,
                            "pasivo_LP": pasivo_LP,
                            "patrimonio": patrimonio,
                        }
                    )
    except Exception as error:
        return jsonify(
            {
                "message": "Error al procesar la solicitud",
                "status": 502,
                "Error": str(error),
            }
        )


############################## Guardar Datos Mantenedor de vaciado ####################################
def save_dato():
    """
    Función para guardar los datos de mantenedor de vaciado.
    """
    try:
        # Obtener los datos desde el front
        data = request.json
        print(f"datos : {data}")
        if not data:
            return jsonify({"message": "No hay datos para almacenar", "status": 401})
        else:
            # se realiza la conexión a la base de datos
            with get_session() as session:

                balance = Balances(
                    id_distribuidor=data["id_distribuidor"],
                    disponible=data["disponible"],
                    depositos_valores_negociables=data["depositos_valores_negociables"],
                    documentos_cuentas_por_cobrar=data["documentos_cuentas_por_cobrar"],
                    AC_cuentas_por_cobrar_empresas=data[
                        "AC_cuentas_por_cobrar_empresas"
                    ],
                    existencias=data["existencias"],
                    otros_activos_circulantes=data["otros_activos_circulantes"],
                    bienes_raices=data["bienes_raices"],
                    vehiculos=data["vehiculos"],
                    maquinarias_equipos=data["maquinarias_equipos"],
                    muebles_utiles=data["muebles_utiles"],
                    otros_activos_fijos=data["otros_activos_fijos"],
                    depreciacion_acumulada=data["depreciacion_acumulada"],
                    deudores_largo_plazo=data["deudores_largo_plazo"],
                    inversiones_empresas_relacionadas=data[
                        "inversiones_empresas_relacionadas"
                    ],
                    menor_valor_inversiones=data["menor_valor_inversiones"],
                    mayor_valor_inversiones=data["mayor_valor_inversiones"],
                    activo_largo_plazo_cuentas_cobrar=data[
                        "activo_largo_plazo_cuentas_cobrar"
                    ],
                    otros_activos_largo_plazo=data["otros_activos_largo_plazo"],
                    deuda_bancaria_corto_plazo=data["deuda_bancaria_corto_plazo"],
                    porcion_corriente_largo_plazo=data["porcion_corriente_largo_plazo"],
                    pasivo_circulante_documentos_cuentas_pagar=data[
                        "pasivo_circulante_documentos_cuentas_pagar"
                    ],
                    pasivo_circulante_cuentas_pagar_empresas=data[
                        "pasivo_circulante_cuentas_pagar_empresas"
                    ],
                    impuestos_previsiones_pagar=data["impuestos_previsiones_pagar"],
                    otros_pasivos_circulantes=data["otros_pasivos_circulantes"],
                    deuda_bancaria_LP=data["deuda_bancaria_LP"],
                    documentos_pagar_LP=data["documentos_pagar_LP"],
                    cuentas_pagar_LP=data["cuentas_pagar_LP"],
                    otros_pasivos_LP=data["otros_pasivos_LP"],
                    capital_pagado=data["capital_pagado"],
                    revalor_capital_reservas=data["revalor_capital_reservas"],
                    utilidad_acumulada=data["utilidad_acumulada"],
                    utilidad_ejercicio=data["utilidad_ejercicio"],
                    divid_provisorios=data["divid_provisorios"],
                    retasacion_tecnica_activo_fijo=data[
                        "retasacion_tecnica_activo_fijo"
                    ],
                    ajustes_patrimoniales=data["ajustes_patrimoniales"],
                    fecha_registro=data["fecha_registro"],
                    tipo_cambio=data["tipo_cambio"],
                    tipo_moneda=data["tipo_moneda"],
                )
                if not balance:
                    return jsonify(
                        {"message": "Error al armar los datos", "status": 401}
                    )
                else:
                    session.add(balance)
                    session.commit()
                    session.close()
                    return jsonify(
                        {
                            "message": "Exito al Guardar la información",
                            "status": 200,
                        }
                    )
    except Exception as err:
        return jsonify(
            {
                "message": "Error al procesar la solicitud",
                "status": 502,
                "Error": str(err),
            }
        )
