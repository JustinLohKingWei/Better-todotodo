from django.db import models

# Create your models here.

class Task(models.Model):
    taskname =  models.CharField(max_length=120)
    notes = models.TextField(default="")
    completed = models.BooleanField(default=False)
