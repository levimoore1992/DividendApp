from django.db import models
import requests
from bs4 import BeautifulSoup

class Stock(models.Model):
    stock_name = models.CharField(max_length=100)
    dividend = models.FloatField(round(2))
    last_updated = models.DateTimeField(auto_now=True)
    price = models.FloatField(round(2))
    ticker = models.CharField(max_length=4)
    is_investable = models.BooleanField(default=False)
    is_owned = models.BooleanField(default=False)
    ex_div_date = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.stock_name

    def save(self, *args, **kwargs):
        self.ex_div_date = self.get_ex_div_date(self.ticker)
        print(self.ex_div_date)
        if float(self.dividend) / float(self.price) > .05:
            self.is_investable = True
        super(Stock, self).save(*args, **kwargs)

    def get_ex_div_date(self, ticker):
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks')
        data = r.json()
        return data['data']['exDividendDate']


class UnsupportedStocks(models.Model):
    """Stock that arent supported by the yahoo finance API"""

    ticker = models.CharField(max_length=4)
