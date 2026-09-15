from django.urls import path
from .views import IncomeListCreateView,ExpenseListCreateView

urlpatterns = [
    path('income/', IncomeListCreateView.as_view(), name='income-list-create'),
    path('expense/', ExpenseListCreateView.as_view(), name='expense-list-create'),
]

