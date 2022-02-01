from email.policy import default
from django.db import models
from django.db.models.fields import DateTimeField
from django.db.models.fields.related import ForeignKey
from django.utils.text import slugify

class JaIMojePsy (models.Model):
    image = models.ImageField(upload_to='jaimojepsy/')
    heading1 = models.CharField(max_length=100)
    par1 = models.CharField(max_length=300)
    par2 = models.CharField(max_length=500)

    def __str__(self):
        return self.heading1

class TrainingEvent(models.Model):
    title = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    upated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class GalImg (models.Model):
    event = models.ForeignKey(TrainingEvent, related_name="image_event", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="gallery/%Y/%m/%d/")
    title = models.CharField(max_length=50)

class Trening (models.Model):
    rodzaj = models.ForeignKey(TrainingEvent, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    description2 = models.CharField(max_length=500, blank=True, null=True)
    link = models.CharField(max_length=300)
    link2 = models.CharField(max_length=300, blank=True, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    price2 = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Trening, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

class EventCategory (models.Model):
    title = models.CharField(max_length=200)
    desc = models.CharField(max_length=500, blank=True, null=True)

class Wydarzenie (models.Model):
    event = ForeignKey(EventCategory, related_name="events", on_delete=models.CASCADE)
    event_link = models.CharField(max_length=200, default='')
    zapisy_link = models.CharField(max_length=200, default='')
    title =  models.CharField(max_length=200)
    day = models.CharField(max_length=20)
    month = models.CharField(max_length=20)
    year = models.CharField(max_length=20)

class Kontakt (models.Model):
    fblink = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    telnr = models.CharField(max_length=20)
    other1 = models.CharField(max_length=200, blank=True, null=True)
    other2 = models.CharField(max_length=200,  blank=True, null=True)
    banknr =models.CharField(max_length=100)
    banktitle = models.CharField(max_length=100)
    bankadress = models.CharField(max_length=100)