import requests
from .models import Stock
from datetime import datetime


def get_stock_data(ticker):
    headers = {'cookie': 'ak_bmsc=20E72A11270979763019E15FB14E0DCB1736A44F8C3800009BCE195FDF6A4B4D~pl5CLirohlLftep4KFVUCxjldV2kJZwe1phGpJFFxegNukmOHzREg3ps0f/bkMe48K8NL8M1GQhJLRPps5DlBmtG0BXuSN1RPUMY4hkS3gA00Bmc+0jdiXLAje7c1TeWloivWpGTkkSuaLhSsgkjaNlmVaqEA3unwR/nGYjKwUAPHxYR+BVedplusn+E/nZU5fitdSdtITr/cwHUEYLVMMlOpnCUzK28sMQ0C+FtF/V5g=; bm_sv=34A4184E3404304D5213DD0F2D5FBD7C~X4OG3OPNszlrUcbEwz8C3jwzbVNI0MUF86gjlFsxTBrwmykxFiQC/AY24CfItDE8ZIMJbSd1HLImRim8yvwWJaPFEdXFdpi7h+6NFnA291jSoDdPgltVQj3IEk1mRIiQkZc4zuJvDQbszYN3IfG4pgYmT26q5cYt4cxUM3ldXMI='}
    try:
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=stocks', headers=headers).json()
        if r['data']:
            d = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks',headers=headers).json()
        else:
            r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=etf', headers=headers).json()
            d = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=etf', headers=headers).json()

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
        raise Exception({'error': 'Couldnt return stock'})

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
