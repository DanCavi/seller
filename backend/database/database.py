from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(
    "mysql+pymysql://root:root@localhost:3306/EC_MaquinaVentas?charset=utf8mb4"
)

def getSession():
    try:
        Session = sessionmaker(bind=engine)
        return Session()
    except Exception as e:
        return print(f"Error: {e}")
    
# with engine.connect() as conn:
#     query = """
#     select tas.ID as "id", 
#         tas.NOMBRE_SCRIPT as "nombre",
#         tas.FECHA_CREACION as "creada",
#         tf.NOMBRE_SECCION as "funnel-comercial",
#         tc.NOM_CANAL as "canal",
#         tas.INICIO_VIGENCIA as "inicio-vigencia",
#         tas.FIN_VIGENCIA as "fin-vigencia",
#         tas.CAMPANIA as "campania",
#         concat(u.USU_NOMBRE, ' ', u.USU_APELLIDO) as "autor",
#         tes.NOM_ESTADO as "estado",
#         tas.ACTIVA as "activa"
#     from tbl_admin_scripts tas
#         inner join usuario u on tas.AUTOR_ID = u.USU_ID
#         inner join tbl_funnelcomercial tf on tas.FUNNEL_ID = tf.ID
#         inner join tbl_canal tc on tas.ID_CANAL = tc.ID
#         inner join tbl_estado_script tes on tas.ID_ESTADO = tes.ID; 
#     """
#     result = conn.execute(text(query))
#     print(result)
#     json_data = []
#     for row in result:
#         # json_data.append(dict(zip(row_headers, result)))
#         print(row)