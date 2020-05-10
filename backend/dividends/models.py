from django.db import models


class Stock(models.Model):
    stock_name = models.CharField(max_length=100)
    dividend = models.FloatField(round(2))
    last_updated = models.DateTimeField(auto_now=True)
    price = models.FloatField(round(2))
    shares_needed = models.IntegerField(round(0))
    investment_needed = models.IntegerField(round(0))
    ticker = models.CharField(max_length=4, default='')

    def __str__(self):
        return self.stock_name
