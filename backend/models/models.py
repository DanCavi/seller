from sqlalchemy import DateTime
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

class Base(DeclarativeBase, SerializerMixin):
    pass


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