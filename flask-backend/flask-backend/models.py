from datetime import datetime

class User(db.Document):
    username = db.StringField(max_length=50, required=True)
    password = db.StringField(required=True)
    admin = db.BooleanField(default=False)

class Article(db.Document):
    title = db.StringField(required=True)
    content = db.StringField(required=True)
    publish_date = db.DateTimeField(default=datetime.utcnow)
    tags = db.ListField(db.StringField(), required=True)

class Comment(db.Document):
    username = db.StringField(max_length=50, required=True)
    comment = db.StringField(required=True)
    comment_date = db.DateTimeField(default=datetime.utcnow)