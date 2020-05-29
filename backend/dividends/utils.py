import yfinance as yf
import requests
from bs4 import BeautifulSoup
from .models import Stock, UnsupportedStocks


def get_stock_data(ticker):
    stock = yf.Ticker(ticker)

    try:
        dividend_rate = float(stock.info['dividendRate'])
        # price = float(stock.info['regularMarketPrice'])
        price = float(stock.info['ask'])
        name = stock.info['shortName']
    except Exception as e:
        unsupported, created = UnsupportedStocks.objects.get_or_create(ticker=ticker)
        if created:
            created.save()
        return {'error':"Couldnt get this stock"}

    stock_model, created = Stock.objects.update_or_create(ticker=ticker,
                                                          defaults={'dividend': dividend_rate,
                                                                    'price': price,
                                                                    'stock_name': name
                                                                    })
    if stock_model:
        stock_model.save()
    else:
        created.save()
    return {'stock_name': name}


def get_dividend(content):
    soup = BeautifulSoup(content, 'html.parser')
    table = soup.find('table')
    rows = table.find_all('tr')
    for row in rows:
        cols = row.find_all('td')
        if cols[0].find('strong').text == 'Annual Dividend:':
            return float(cols[1].text.strip('$'))


def get_price(content):
    soup = BeautifulSoup(content, 'html.parser')
    div = soup.find('div', {'class': 'price'})
    price_tag = div.find('strong')
    price = float(price_tag.text.strip('$'))

    return price


def get_name(content):
    soup = BeautifulSoup(content, 'html.parser')
    h1 = soup.find('h1', {'class': 'PageTitleHOne'})
    name = h1.contents[2].strip('Dividend Yield, History & Payout Ratio\n')
    return name


def get_unsupported_stock_data(ticker):
    html = requests.get(f'https://www.marketbeat.com/stocks/NYSEARCA/{ticker}/dividend/')
    content = html.content
    dividend_rate = get_dividend(content)
    price = get_price(content)
    name = get_name(content)
    try:
        stock_model, created = Stock.objects.update_or_create(ticker=ticker,
                                                              defaults={'dividend': dividend_rate,
                                                                        'price': price,
                                                                        'name': name
                                                                        })

        if stock_model:
            stock_model.save()
        else:
            created.save()
    except Exception as e:
        print(f'{ticker}: {e}')




