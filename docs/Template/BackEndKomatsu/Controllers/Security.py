import datetime
import pytz

class Security():
    tz = pytz.timezone("America/Santiago")
    @classmethod
    def generate_token(cls, authenticated_user):
        payload = {
            'iat' : datetime.datetime.now(tz=cls.tz),
            'exp' : datetime.datetime.now(tz = cls.tz)+datetime.timedelta(minutes=10)
        }