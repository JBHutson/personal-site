import flask
from . import main_bp

@main_bp.route('/', defaults={'path': ''})
@main_bp.route('/<path:path>')
def catch_all(path):
    return flask.render_template('index.html')