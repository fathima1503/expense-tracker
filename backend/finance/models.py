from django.db import models

# Create your models here.

class Income(models.Model):
    source = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    month = models.DateField()

class Debt(models.Model):
    name = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    remaining_amount = models.DecimalField(max_digits=10, decimal_places=2)

class CreditCard(models.Model):
    name = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    remaining_amount = models.DecimalField(max_digits=10, decimal_places=2)

class Expense(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    CATEGORY_CHOICES = [
        ('debt', 'Debt'),
        ('credit_card', 'Credit Card'),
        ('emi', 'EMI'),
        ('grocery', 'Grocery'),
        ('clothes', 'Clothes'),
        ('rent','Rent'),
        ('other', 'Other'),
    ]
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    # blank=True — allows it to be empty in forms/API input
    # null=True — allows it to be empty (NULL) in the database
    note = models.TextField(blank=True,null=True) 
    date = models.DateField()
    debt = models.ForeignKey(Debt, on_delete=models.SET_NULL, null=True, blank=True)
    credit_card = models.ForeignKey(CreditCard, on_delete=models.SET_NULL, null=True, blank=True)



