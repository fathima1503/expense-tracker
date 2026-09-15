# Create your views here.

from rest_framework import generics
from .models import Income,Expense
from .serializers import IncomeSerializer,ExpenseSerializer

class IncomeListCreateView(generics.ListCreateAPIView):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class ExpenseListCreateView(generics.ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer


