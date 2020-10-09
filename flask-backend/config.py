import os

base_dir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = 'test_key'
    DEBUG = False
    TESTING = False

    def init_app(app):
        pass

class DevelopmentConfig(Config):
    DEBUG = True

config = {
    'development': DevelopmentConfig,
    'default': DevelopmentConfig
}