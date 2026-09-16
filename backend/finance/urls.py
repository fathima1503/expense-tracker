from django.urls import path
from .views import IncomeListCreateView,ExpenseListCreateView,DebtListCreateView,DebtPaymentView

urlpatterns = [
    path('income/', IncomeListCreateView.as_view(), name='income-list-create'),
    path('expense/', ExpenseListCreateView.as_view(), name='expense-list-create'),
    path('debt/', DebtListCreateView.as_view(), name='debt-list-create'),
    path('debt/<int:pk>/pay/', DebtPaymentView.as_view(), name='debt-payment'),
]

