import requests
from .models import Stock



def get_stock_data(ticker):
    url = f'https://api.polygon.io/v2/reference/dividends/{ticker}?apiKey=aUDBthQe28DNmpXVDeiqypEOE0fd5GEx'
    try:
        response = requests.get(url)
        json = response.json()
        d = json['results']

        ex_div_date = d[0]['exDate']
        next_div_amount = d[0]['amount']
        payment_date = d[0]['paymentDate']

        stock_model, created = Stock.objects.update_or_create(ticker=ticker,
                                                              defaults={
                                                                        'ex_div_date': ex_div_date,
                                                                        'next_div_amount': next_div_amount,
                                                                        'payment_date': payment_date
                                                                        })
        if stock_model:
            stock_model.save()
        else:
            created.save()
    except Exception as e:
        raise Exception({'error': f'{e}'})


