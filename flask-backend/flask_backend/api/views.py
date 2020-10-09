from flask import Response, request, jsonify
from flask_backend import apis
from flask_restful import Resource

from ..models import Article

class getArticles(Resource):
    def get(self):
        articles = Article.objects()
        return jsonify(articles)

apis.add_resource(getArticles, '/api/articles')