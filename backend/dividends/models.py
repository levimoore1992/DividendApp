from django.db import models
import requests
from datetime import datetime


class Stock(models.Model):
    stock_name = models.CharField(max_length=100)
    dividend = models.FloatField(round(2))
    last_updated = models.DateTimeField(auto_now=True)
    price = models.FloatField(round(2))
    ticker = models.CharField(max_length=4)
    is_investable = models.BooleanField(default=False)
    is_owned = models.BooleanField(null=True, blank=True, default=False)
    shares_owned = models.IntegerField(default=0)
    ex_div_date = models.DateField(null=True, blank=True)
    next_div_amount = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.ticker

    def save(self, *args, **kwargs):
        self.ex_div_date, self.next_div_amount = self.get_ex_div_date(self.ticker)
        self.is_investable = .07 < float(self.dividend) / float(self.price) < .13

        super(Stock, self).save(*args, **kwargs)

    def get_ex_div_date(self, ticker):
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks')
        data = r.json()
        if data['data'] is None:
            return None, None
        elif data['data']['exDividendDate'] != 'N/A':
            date = datetime.strptime(data['data']['exDividendDate'], '%m/%d/%Y')
            if date < datetime.now():
                return None, None
            next_div_amount = data['data']['dividends']['rows'][0]['amount'].strip('$')
            correct_date = date.strftime('%Y-%m-%d')
            return correct_date, next_div_amount
        else:
            return None, None


class UnsupportedStocks(models.Model):
    """Stock that arent supported by the yahoo finance API"""

    ticker = models.CharField(max_length=4)
