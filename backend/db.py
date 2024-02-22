from sqlalchemy import text, create_engine

engine = create_engine(
    "mysql+pymysql://root:root@localhost:3306/EC_MaquinaVentas?charset=utf8mb4"
)

with engine.connect() as conn:
    
    result = conn.execute(text("select x, y from some_table"))
    for row in result:
        print(f"x: {row.x} y: {row.y}")
