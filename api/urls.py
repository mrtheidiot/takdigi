from django.urls import path
from . import views

urlpatterns = [
    path('jaimojepsy/', views.getJaimojepsy, name='jaimojepsy'),
    path('galeriapieskow/', views.getGalImgs),
    path('treningi/', views.getTrening),
    path('kontakt/', views.getKontakt),
    path('wydarzenia/', views.getWydarzenie)
]
