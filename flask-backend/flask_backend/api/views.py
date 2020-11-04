from flask import Response, request, jsonify
from flask_backend import apis
from flask_restful import Resource

from ..models import Article

class getArticles(Resource):
    def get(self):
        articles = Article.objects.values_list('title', 'publish_date', 'slug', 'tags')
        return jsonify(articles)

class getArticle(Resource):
    def get(self):
        slug = request.args['slug']
        article = Article.objects.get(slug=slug)
        return jsonify(article)

apis.add_resource(getArticles, '/api/articles')
apis.add_resource(getArticle, '/api/article')