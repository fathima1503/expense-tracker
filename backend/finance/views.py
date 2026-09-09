# Create your views here.

from rest_framework import generics
from .models import Income
from .serializers import IncomeSerializer

class IncomeListCreateView(generics.ListCreateAPIView):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

