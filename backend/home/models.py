from django.conf import settings
from django.db import models
class TestM(models.Model):
    'Generated Model'
    name = models.TextField()
    testNumber = models.IntegerField()
