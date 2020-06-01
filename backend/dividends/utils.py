import yfinance as yf
import requests
from .models import Stock


def get_stock_data(ticker):
    stock = yf.Ticker(ticker)
    try:
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=stocks').json()
    except:
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=etf').json()

    try:
        price = r['data']['primaryData']['lastSalePrice'].strip('$')
        name = r['data']['companyName']
    except Exception as e:

        return {'error':"Couldnt get this stock"}

    stock_model, created = Stock.objects.update_or_create(ticker=ticker,
                                                          defaults={'price': price,
                                                                    'stock_name': name
                                                                    })
    if stock_model:
        stock_model.save()
    else:
        created.save()
    return {'stock_name': name}







