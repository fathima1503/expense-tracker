# Create your views here.

from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db.models import Sum
from datetime import date
from decimal import Decimal
from .models import Income,Expense,Debt,CreditCard
from .serializers import IncomeSerializer,ExpenseSerializer,DebtSerializer,CreditCardSerializer

class IncomeListCreateView(generics.ListCreateAPIView):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class ExpenseListCreateView(generics.ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

class DebtListCreateView(generics.ListCreateAPIView):
    queryset = Debt.objects.all()
    serializer_class = DebtSerializer

class DebtPaymentView(APIView):
    def post(self, request, pk):
        debt = get_object_or_404(Debt, pk=pk)
        amount_paid = Decimal(request.data['amount'])
        
        debt.remaining_amount -= amount_paid
        debt.save()
        
        Expense.objects.create(
            amount=amount_paid,
            category='debt',
            date=request.data.get('date'),
            debt=debt
        )
        
        serializer = DebtSerializer(debt)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CreditCardListCreateView(generics.ListCreateAPIView):
    queryset = CreditCard.objects.all()
    serializer_class = CreditCardSerializer

class CreditCardPaymentView(APIView):
    def post(self, request, pk):
        creditCard = get_object_or_404(CreditCard, pk=pk)
        amount_paid = Decimal(request.data['amount'])
        
        creditCard.remaining_amount -= amount_paid
        creditCard.save()
        
        Expense.objects.create(
            amount=amount_paid,
            category='credit_card',
            date=request.data.get('date'),
            credit_card=creditCard
        )
        
        serializer = CreditCardSerializer(creditCard)
        return Response(serializer.data, status=status.HTTP_200_OK)

class DashboardView(APIView):
    def get(self, request):
        today = date.today()
        current_month = today.month
        current_year = today.year
        
        income_total = Income.objects.filter(
            month__month=current_month,
            month__year=current_year
        ).aggregate(Sum('amount'))['amount__sum'] or 0

        expense_total = Expense.objects.filter(
            date__month=current_month,
            date__year=current_year
        ).aggregate(Sum('amount'))['amount__sum'] or 0

        debt_total = Debt.objects.aggregate(Sum('remaining_amount'))['remaining_amount__sum'] or 0
        credit_card_total = CreditCard.objects.aggregate(Sum('remaining_amount'))['remaining_amount__sum'] or 0
        
        return Response({
            'remaining_in_hand': income_total - expense_total,
            'total_debt': debt_total,
            'total_credit_card': credit_card_total,
        })