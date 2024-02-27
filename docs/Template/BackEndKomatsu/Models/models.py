from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    ForeignKey,
    DateTime,
    VARCHAR,
    DATE,
    Time,
    Text,
)
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
####################################### Tabla Entidad  #################################


class Distributor(Base):
    __tablename__ = "distributor"

    id = Column(Integer, primary_key=True)
    name = Column(VARCHAR(50))
    sap_code = Column(Integer)
    unique_rol = Column(Integer)
    endorsement = Column(VARCHAR(50))
    group = Column(VARCHAR(50))
    brands = Column(VARCHAR(50))
    product_lines = Column(VARCHAR(50))
    participation = Column(VARCHAR(50))
    partners_shareholder = Column(VARCHAR(50))
    share = Column(VARCHAR(50))
    negative_fact = Column(Text)
    positive_fact = Column(Text)
    fecha_registro = Column(DateTime)
    payment_behavior = Column(VARCHAR)
    litigation = Column(Boolean)


####################################### Balances #####################################
class Balances(Base):
    __tablename__ = "balances"

    id = Column(Integer, primary_key=True)
    id_distribuidor = Column(Integer, ForeignKey("distributor.id"))
    disponible = Column(Integer)
    depositos_valores_negociables = Column(Integer)
    documentos_cuentas_por_cobrar = Column(Integer)
    AC_cuentas_por_cobrar_empresas = Column(Integer)
    existencias = Column(Integer)
    otros_activos_circulantes = Column(Integer)
    bienes_raices = Column(Integer)
    vehiculos = Column(Integer)
    maquinarias_equipos = Column(Integer)
    muebles_utiles = Column(Integer)
    otros_activos_fijos = Column(Integer)
    depreciacion_acumulada = Column(Integer)
    deudores_largo_plazo = Column(Integer)
    inversiones_empresas_relacionadas = Column(Integer)
    menor_valor_inversiones = Column(Integer)
    mayor_valor_inversiones = Column(Integer)
    activo_largo_plazo_cuentas_cobrar = Column(Integer)
    otros_activos_largo_plazo = Column(Integer)
    deuda_bancaria_corto_plazo = Column(Integer)
    porcion_corriente_largo_plazo = Column(Integer)
    pasivo_circulante_documentos_cuentas_pagar = Column(Integer)
    pasivo_circulante_cuentas_pagar_empresas = Column(Integer)
    impuestos_previsiones_pagar = Column(Integer)
    otros_pasivos_circulantes = Column(Integer)
    deuda_bancaria_LP = Column(Integer)
    documentos_pagar_LP = Column(Integer)
    cuentas_pagar_LP = Column(Integer)
    otros_pasivos_LP = Column(Integer)
    capital_pagado = Column(Integer)
    revalor_capital_reservas = Column(Integer)
    utilidad_acumulada = Column(Integer)
    utilidad_ejercicio = Column(Integer)
    divid_provisorios = Column(Integer)
    retasacion_tecnica_activo_fijo = Column(Integer)
    ajustes_patrimoniales = Column(Integer)
    fecha_registro = Column(DateTime)
    tipo_moneda = Column(VARCHAR)
    tipo_cambio = Column(Integer)
