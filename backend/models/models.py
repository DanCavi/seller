from sqlalchemy import DateTime, ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy_serializer import SerializerMixin


class Base(DeclarativeBase, SerializerMixin):
    pass


class Perfil(Base):
    __tablename__ = "perfil"

    perfil_id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str]
    creacion: Mapped[DateTime] = mapped_column(DateTime)
    ejecutivo: Mapped[bool]
    admin: Mapped[bool]


class Usuario(Base):
    __tablename__ = "usuario"

    usuario_id: Mapped[int] = mapped_column(primary_key=True)
    usuario: Mapped[str]
    password: Mapped[str]
    nombre: Mapped[str]
    apellido: Mapped[str]
    rut: Mapped[int]
    digito_verificador: Mapped[str]
    estado: Mapped[str]
    perfil_id: Mapped[int] = mapped_column(ForeignKey("perfil.perfil_id"))
    perfil: Mapped["Perfil"] = relationship()
    funnel_comercial: Mapped["FunnelComercial"] = relationship(back_populates="autor")


class FunnelComercial(Base):
    __tablename__ = "funnel_comercial"

    funnel_comercial_id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str]
    fecha_creacion: Mapped[DateTime] = mapped_column(DateTime)
    autor_id: Mapped[int] = mapped_column(ForeignKey("usuario.usuario_id"))
    autor: Mapped["Usuario"] = relationship(back_populates="funnel_comercial")
    activo: Mapped[int]
    requisito: Mapped[str]
    orden: Mapped[int]
