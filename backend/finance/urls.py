from django.urls import path
from .views import IncomeListCreateView

urlpatterns = [
    path('income/', IncomeListCreateView.as_view(), name='income-list-create'),
]