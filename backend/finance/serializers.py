from rest_framework import serializers
from .models import Income,Expense,Debt,CreditCard

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['id','source','amount','month']

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id','amount', 'category', 'note','date']

class DebtSerializer(serializers.ModelSerializer) :
    class Meta:
        model = Debt
        fields = ['id','name','total_amount', 'remaining_amount']

class CreditCardSerializer(serializers.ModelSerializer) :
    class Meta:
        model = CreditCard
        fields = ['id','name','total_amount', 'remaining_amount']
