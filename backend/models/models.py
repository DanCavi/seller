from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column


class Base(DeclarativeBase):
    pass


class Perfil(Base):
    __tablename__ = "user"

    PER_ID: Mapped[int] = mapped_column(primary_key=True)
    PER_NOMBRE: Mapped[str]

