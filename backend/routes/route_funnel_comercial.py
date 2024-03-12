from flask import Blueprint, request

from controllers.funnel_comercial import *

funnel_comercial_blueprint = Blueprint("funnel-comercial", __name__)


@funnel_comercial_blueprint.route("/funnel-comercial/ejecutivos", methods=["GET"])
def group_funnel_comercial():
    if request.method == "GET":
        return getFunnel()
    if request.method == "POST":
        return 'addFunnel()'

@funnel_comercial_blueprint.route("/funnel-comercial/<int:id>", methods=["DELETE", "PATCH", "GET"])
def item_funnel_comercial(id):
    if request.method == "GET":
        return 'getFunnel(id)'
    if request.method == "DELETE":
        return 'deleteFunnel(id)'
    if request.method == "PATCH":
        return 'setFunnel(id)'