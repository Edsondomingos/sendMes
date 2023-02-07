from django.urls import path
# from recipes.views import home, sobre, contato
from . import views # . - relaciona o diretorio atual

# HTTP Request
urlpatterns = [
    path('', views.home),
    path('recipes/<int:id>/', views.recipe),
    path('contact/<int:id>/', views.contact),
]
