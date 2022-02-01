from rest_framework.serializers import ModelSerializer
from .models import JaIMojePsy, GalImg, Trening, Kontakt, Wydarzenie, TrainingEvent


class JaimojepsySerializer(ModelSerializer):
  class Meta():
    model = JaIMojePsy
    fields = ('__all__')

class GalImgSerializer(ModelSerializer):
  class Meta():
    model = GalImg
    fields = ('__all__')

class TreningSerializer(ModelSerializer):
  class Meta():
    model = Trening
    fields = ('__all__')    
    
class KontaktSerializer(ModelSerializer):
  class Meta():
    model = Kontakt
    fields = ('__all__') 

class WydarzenieSerializer(ModelSerializer):
  class Meta():
    model = Wydarzenie
    fields = ('__all__') 

class TrainingEventSerializer(ModelSerializer):
  class Meta():
    model = TrainingEvent
    fields = ('__all__')

class TrainingTitlesSerializer(ModelSerializer):
  class Meta():
    model = Trening
    fields = ('title', 'slug', ) 