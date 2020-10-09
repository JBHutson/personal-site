import flask
from flask_mongoengine import MongoEngine
from flask_admin import Admin
from flask_restful import Api
from flask_admin.contrib.mongoengine import ModelView
from config import config

db = MongoEngine()
apis = Api()

def create_app(config_name):

    app = flask.Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    db.init_app(app)

    from .models import User, Article, Comment
    admin = Admin(app, name='personal', template_mode='bootstrap3')
    admin.add_view(ModelView(User))
    admin.add_view(ModelView(Article))
    admin.add_view(ModelView(Comment))

    from .api import api_bp as api_blueprint
    app.register_blueprint(api_blueprint)
    apis.init_app(app)

    from .main import main_bp as main_blueprint
    app.register_blueprint(main_blueprint)

    return app