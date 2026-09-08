from django.contrib import admin
from .models import Income, Debt, CreditCard, Expense


# Register your models here.

admin.site.register(Income)

admin.site.register(Debt)

admin.site.register(CreditCard)

admin.site.register(Expense)