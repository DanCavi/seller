from flask import Flask, request, jsonify
from dataBase.dbConn import get_session
from models.reactFlow import Scripts

app = Flask(__name__)

# Obtener todos los scripts para un usuario específico
def get_all_scripts(id_usuario):
    try:
        with get_session() as session:
            scripts = session.query(Scripts).filter(Scripts.id_usuario == id_usuario).all()
            if not scripts:
                return jsonify({"message": "No se encontraron scripts para el usuario"}), 404

            scripts_json = [{
                "id": script.id,
                "nombre": script.nombre,
                "mensaje": script.mensaje,
                "canal": script.canal,
                "estado": script.estado,
                "fecha_inicio_vigencia": script.fecha_inicio_vigencia,
                "fecha_final_vigencia": script.fecha_final_vigencia,
                "cc": script.cc,
                "co": script.co
            } for script in scripts]

            return jsonify({"message": "Obtención de datos exitosa", "data": scripts_json}), 200

    except Exception as error:
        return jsonify({
            "message": "Error al obtener datos",
            "status": 501,
            "error": str(error)
        }), 500

# Actualizar un script por su ID
def update_script_by_id(id_script):
    try:
        with get_session() as session:
            script = session.query(Scripts).get(id_script)
            if not script:
                return jsonify({"message": "Script no encontrado"}), 404

            data = request.json

            for key, value in data.items():
                setattr(script, key, value)

            session.commit()

            return jsonify({"message": "Script actualizado correctamente", "status": 200}), 200

    except Exception as error:
        return jsonify({
            "message": f"Error al actualizar el script: {str(error)}",
            "status": 500
        }), 500

# Rutas
@app.route('/scripts/<int:id_usuario>', methods=['GET'])
def get_scripts(id_usuario):
    return get_all_scripts(id_usuario)

@app.route('/scripts/<int:id_script>', methods=['PUT'])
def update_script(id_script):
    return update_script_by_id(id_script)

if __name__ == '__main__':
    app.run(debug=True)
