from django.db import models


class Stock(models.Model):
    stock_name = models.CharField(max_length=100)
    dividend = models.FloatField(round(2))
    last_updated = models.DateTimeField(auto_now=True)
    price = models.FloatField(round(2))
    ticker = models.CharField(max_length=4)
    is_investable = models.BooleanField(default=False)

    def __str__(self):
        return self.stock_name

    def save(self, *args, **kwargs):
        if float(self.dividend) / float(self.price) > .05:
            self.is_investable = True
        super(Stock, self).save(*args, **kwargs)


class UnsupportedStocks(models.Model):
    """Stock that arent supported by the yahoo finance API"""

    ticker = models.CharField(max_length=4)