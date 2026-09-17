from django.urls import path
from .views import IncomeListCreateView,ExpenseListCreateView,DebtListCreateView,DebtPaymentView,CreditCardListCreateView,CreditCardPaymentView,DashboardView

urlpatterns = [
    path('income/', IncomeListCreateView.as_view(), name='income-list-create'),
    path('expense/', ExpenseListCreateView.as_view(), name='expense-list-create'),
    path('debt/', DebtListCreateView.as_view(), name='debt-list-create'),
    path('debt/<int:pk>/pay/', DebtPaymentView.as_view(), name='debt-payment'),
    path('creditcard/', CreditCardListCreateView.as_view(), name='creditcard-list-create'),
    path('creditcard/<int:pk>/pay/', CreditCardPaymentView.as_view(), name='creditcard-payment'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),

]

