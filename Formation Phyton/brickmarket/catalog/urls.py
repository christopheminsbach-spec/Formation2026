from django.urls import path
from . import views


urlpatterns = [

    path("", views.home, name="home"),

    path(
        "produit/<int:id>/",
        views.produit,
        name="produit"
    ),

]