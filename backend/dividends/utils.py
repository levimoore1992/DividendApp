import requests
from .models import Stock


def get_stock_data(ticker):
    try:
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=stocks').json()
        d = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks').json()
    except:
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=etf').json()
        d = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=etf').json()

    try:
        dividend = d['data']['annualizedDividend']
        price = r['data']['primaryData']['lastSalePrice'].strip('$')
        name = r['data']['companyName']
    except Exception as e:

        return {'error': "Couldnt get this stock"}

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







