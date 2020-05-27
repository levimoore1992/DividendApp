from django.contrib import admin
from .models import Stock

# Register your models here.


class DividendAdmin(admin.ModelAdmin):
    list_display = ('ticker', 'stock_name', 'shares_owned')
    list_filter = ('is_investable', 'is_owned')

admin.site.register(Stock, DividendAdmin)
