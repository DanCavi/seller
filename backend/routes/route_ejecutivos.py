from flask import Blueprint, request
from controllers.ejecutivos import *

ejecutivos_blueprint = Blueprint("ejecutivos", __name__)



@ejecutivos_blueprint.route("/ejecutivos", methods=["GET", "POST"])
def group_ejecutivos():
    if request.method == "GET":
        return getEjecutivos()
    if request.method == "POST":
        return 'addEjecutivo()'
    
@ejecutivos_blueprint.route("/ejecutivos/<int:id>", methods=["DELETE", "PATCH", "GET"])
def item_ejecutivos(id):
    if request.method == "GET":
        return 'getEjecutivo(id)'
    if request.method == "DELETE":
        return 'deleteEjecutivo(id)'
    if request.method == "PATCH":
        return 'setEjecutivo()'