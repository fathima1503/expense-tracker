from rest_framework import serializers
from .models import Income,Expense

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['id','source','amount','month']

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id','amount', 'category', 'note','date']