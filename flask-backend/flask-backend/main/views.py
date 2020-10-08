import flask
from . import main

@main.route('/', defaults={'path': ''})
@main.route('/<path:path>')
def catch_all(path):
    return flask.render_template('index.html')