from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import EventSerializer
from .models import Event

@api_view(['GET'])
def getEvents(request):
    objects = Event.objects.all()
    serializer = EventSerializer(objects, many=True)
    return Response(serializer.data)