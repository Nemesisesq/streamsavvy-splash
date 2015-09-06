from django.db import models

# Create your models here.

class Email(models.Model):
    address = models.EmailField()

    def _str_(self):
        return self.address