from django.db import models
import requests
from datetime import datetime


class Stock(models.Model):
    stock_name = models.CharField(max_length=100)
    dividend = models.FloatField()
    last_updated = models.DateTimeField(auto_now=True)
    price = models.FloatField()
    ticker = models.CharField(max_length=5)
    is_investable = models.BooleanField(default=False)
    is_owned = models.BooleanField(null=True, blank=True, default=False)
    shares_owned = models.IntegerField(default=0)
    ex_div_date = models.DateField(null=True, blank=True)
    payment_date = models.DateField(null=True, blank=True)
    next_div_amount = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.ticker

    def save(self, *args, **kwargs):
        self.ex_div_date, self.next_div_amount, self.payment_date = self.get_div_dates(self.ticker)
        self.is_investable = .07 < float(self.dividend) / float(self.price) < .2
        if self.shares_owned > 0:
            self.is_owned = True
        super(Stock, self).save(*args, **kwargs)

    def get_div_dates(self, ticker):
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks')
        data = r.json()

        if not data['data']:
            return self.get_etf_data(ticker)

        elif data['data']['exDividendDate'] != 'N/A':
            date = datetime.strptime(data['data']['exDividendDate'], '%m/%d/%Y')
            payment_date = datetime.strptime(data['data']['dividendPaymentDate'], '%m/%d/%Y')
            next_div_amount = data['data']['dividends']['rows'][0]['amount'].strip('$')
            if date < datetime.now():
                return None, next_div_amount, payment_date
            correct_date = date.strftime('%Y-%m-%d')
            return correct_date, next_div_amount, payment_date
        else:
            return None, None, None

    def get_etf_data(self, ticker):
        try:
            r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=etf')
            response = r.json()
            data = response['data']['dividends']['rows'][0]
            next_div_amount = data['amount'].strip('$')
            try:
                payment_date = datetime.strptime(data['paymentDate'], '%m/%d/%Y')
            except:
                payment_date = datetime.strptime(data['exOrEffDate'], '%m/%d/%Y')
            return None, next_div_amount, payment_date
        except Exception as e:
            print(f'Failed in get etf function {self.ticker} {e}')
            return None, None, None
