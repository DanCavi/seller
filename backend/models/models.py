from sqlalchemy import DateTime, ForeignKey, Column, Table
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from typing import Optional

class Base(DeclarativeBase, SerializerMixin):
    pass


user_perfil = Table(
    "perfil_usuario",
    Base.metadata,
    Column("USUARIO_USU_ID", ForeignKey("usuario.USU_ID")),
    Column("PERFIL_PER_ID", ForeignKey("perfil.PER_ID")),
)

class Perfil(Base):
    __tablename__ = "perfil"

    PER_ID: Mapped[int] = mapped_column(primary_key=True)
    PER_NOMBRE: Mapped[str]
    PER_FECHACREACION:Mapped[DateTime] = mapped_column(DateTime)
    ADMIN: Mapped[str]

class AdminScripts(Base):
    __tablename__ = "tbl_admin_scripts"

    ID: Mapped[int] = mapped_column(primary_key=True)
    NOMBRE_SCRIPT: Mapped[str]
    FECHA_CREACION: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())
    AUTOR_ID: Mapped[int]
    ACTIVA: Mapped[int]
    FUNNEL_ID: Mapped[int]
    ID_CANAL: Mapped[int]
    INICIO_VIGENCIA: Mapped[DateTime] = mapped_column(DateTime)
    FIN_VIGENCIA: Mapped[DateTime] = mapped_column(DateTime)
    CAMPANIA: Mapped[int]
    ID_ESTADO: Mapped[int]
    HEADER: Mapped[str]
    SCRIPT: Mapped[str]
    FOTTER: Mapped[str]
    ELIMINADA: Mapped[int]
    PREGUNTA: Mapped[str]

class User(Base):
    __tablename__ = "usuario"

    USU_ID: Mapped[int] = mapped_column(primary_key=True)
    USU_USUARIO: Mapped[str]
    USU_PASSWORD: Mapped[str]
    USU_CORREO: Mapped[str]
    USU_NOMBRE: Mapped[str]
    USU_APELLIDO: Mapped[str]
    USU_RUT: Mapped[int]
    USU_DV: Mapped[str]
    USU_FECHACREACION: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())
    SUCURSAL_SUC_ID: Mapped[int]
    COMUNA_COM_ID: Mapped[int]
    USUARIO_ESTADO_ID: Mapped[int] = mapped_column(ForeignKey("usuario_estado.USUARIO_ESTADO_ID"))
    USERESTADO: Mapped["UserEstado"] = relationship()
    SUPERVISOR_USUARIO: Mapped[int]
    PERFIL: Mapped[Perfil] = relationship(secondary=user_perfil)
    METAS: Mapped["Metas"] = relationship()

class Metas(Base):
    __tablename__ = "metas"

    ID: Mapped[int] = mapped_column(primary_key=True)
    EJECUTIVO_ID: Mapped[int] = mapped_column(ForeignKey("usuario.USU_ID"))
    FECHA: Mapped[DateTime] = mapped_column(DateTime)
    MONTO: Mapped[int]

class UserEstado(Base):
    __tablename__ = "usuario_estado"

    USUARIO_ESTADO_ID: Mapped[int] = mapped_column(primary_key=True)
    USUARIO_ESTADO_NOMBRE: Mapped[str]

class Prospecto(Base):
    __tablename__ = "tbl_prospecto_chat_wsp"

    ID: Mapped[int] = mapped_column(primary_key=True)
    TELEFONO: Mapped[str]
    NOMBRE: Mapped[str]
    APELLIDO: Mapped[str]
    CORREO: Mapped[str]
    NACIONALIDAD: Mapped[str]
    DNI: Mapped[str]
    FECHA_CREACION: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())
    GESTION: Mapped["ProspectoGestion"] = relationship()

class ProspectoGestion(Base):
    __tablename__ = "prospecto_gestion"

    ID: Mapped[int] = mapped_column(primary_key=True)
    FECHA_CREACION: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())
    FECHA_GESTION: Mapped[DateTime] = mapped_column(DateTime)
    ID_PROSPECTO: Mapped[int] = mapped_column(ForeignKey("tbl_prospecto_chat_wsp.ID"))

class FunnelComercial(Base):
    __tablename__ = "tbl_funnelcomercial"

    ID: Mapped[int] = mapped_column(primary_key=True)
    NOMBRE_SECCION: Mapped[str]
    FECHA_CREACION: Mapped[DateTime] = mapped_column(DateTime, default=datetime.now())
    AUTOR_ID: Mapped[int]
    ACTIVA: Mapped[int]
    REQUISITOS: Mapped[str]
    ORDEN: Mapped[int]