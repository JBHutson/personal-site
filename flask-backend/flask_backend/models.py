from flask_backend import db

from datetime import datetime
from slugify import slugify

class User(db.Document):
    username = db.StringField(max_length=50, required=True)
    password = db.StringField(required=True)
    admin = db.BooleanField(default=False)

class Content(db.EmbeddedDocument):
    order_num = db.IntField(required=True)
    content_type = db.StringField(required=True)
    content = db.StringField(required=True)
class Article(db.Document):
    title = db.StringField(required=True)
    content = db.ListField(db.EmbeddedDocumentField(Content), required=True)
    publish_date = db.DateTimeField(default=datetime.utcnow())
    tags = db.ListField(db.StringField(), required=True)
    slug = db.StringField()

    def __init__(self, *args, **kwargs):
        if not 'slug' in kwargs:
            kwargs['slug'] = slugify(kwargs.get('title', ''))
        super().__init__(*args, **kwargs)

class Comment(db.Document):
    username = db.StringField(max_length=50, required=True)
    comment = db.StringField(required=True)
    comment_date = db.DateTimeField(default=datetime.utcnow)