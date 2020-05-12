import yfinance as yf

from .models import Stock


def get_stock_data(ticker):
    stock = yf.Ticker(ticker)

    try:
        dividend_rate = float(stock.info['dividendRate'])
        price = float(stock.info['ask'])
        name = stock.info['shortName']
    except Exception as e:
        return {'error': f"This stock does not have all the info"}

    shares_needed = 1200 / dividend_rate

    investment_needed = shares_needed * price
    stock_model, created = Stock.objects.update_or_create(stock_name=name,
                                                          defaults={'dividend': dividend_rate,
                                                                    'price': price,
                                                                    'shares_needed': shares_needed,
                                                                    'investment_needed': investment_needed,
                                                                    'ticker': ticker})
    if stock_model:
        stock_model.save()
    else:
        created.save()

    return {'stock_name': name, 'shares_needed': round(shares_needed),
            'investment_needed': round(investment_needed)}
