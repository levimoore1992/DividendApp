import requests
from .models import Stock
from datetime import datetime


def get_stock_data(ticker):
    try:
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=stocks').json()
        if r['data']:
            d = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks').json()
        else:
            r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=etf').json()
            d = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=etf').json()

        name = r['data']['companyName']
        price = r['data']['primaryData']['lastSalePrice'].strip('$')

        dividend = d['data']['annualizedDividend']
        if dividend == "N/A":
            dividend = get_dividend(d)

        stock_model, created = Stock.objects.update_or_create(ticker=ticker,
                                                              defaults={'price': price,
                                                                        'stock_name': name,
                                                                        'dividend': dividend
                                                                        })
        if stock_model:
            stock_model.save()
        else:
            created.save()
        return {'stock_name': name}
    except:
        return {'error': 'Couldnt return stock'}

def get_dividend(response_data):
    data = response_data['data']['dividends']['rows']
    date_1 = data[0]['exOrEffDate']
    date_2 = data[1]['exOrEffDate']

    month_1 = datetime.strptime(date_1, '%m/%d/%Y').month
    month_2 = datetime.strptime(date_2, '%m/%d/%Y').month

    if month_1 - month_2 == 1:
        return float(data[0]['amount'].strip('$')) * 12

    if month_1 - month_2 % 3 == 0:
        return float(data[0]['amount'].strip('$')) * 4

    else:
        return float(data[0]['amount'].strip('$')) * 2
