import requests
from .models import Stock
from datetime import datetime

headers = {
    'cookie': 'ak_bmsc=20E72A11270979763019E15FB14E0DCB1736A44F8C3800009BCE195FDF6A4B4D~pl5CLirohlLftep4KFVUCxjldV2kJZwe1phGpJFFxegNukmOHzREg3ps0f/bkMe48K8NL8M1GQhJLRPps5DlBmtG0BXuSN1RPUMY4hkS3gA00Bmc+0jdiXLAje7c1TeWloivWpGTkkSuaLhSsgkjaNlmVaqEA3unwR/nGYjKwUAPHxYR+BVedplusn+E/nZU5fitdSdtITr/cwHUEYLVMMlOpnCUzK28sMQ0C+FtF/V5g=; bm_sv=34A4184E3404304D5213DD0F2D5FBD7C~X4OG3OPNszlrUcbEwz8C3jwzbVNI0MUF86gjlFsxTBrwmykxFiQC/AY24CfItDE8ZIMJbSd1HLImRim8yvwWJaPFEdXFdpi7h+6NFnA291jSoDdPgltVQj3IEk1mRIiQkZc4zuJvDQbszYN3IfG4pgYmT26q5cYt4cxUM3ldXMI='
}


def get_stock_data(ticker):
    try:
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=stocks', headers=headers).json()
        if r['data']:
            d = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks',
                             headers=headers).json()
        else:
            r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/info?assetclass=etf', headers=headers).json()
            d = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=etf',
                             headers=headers).json()

        name = r['data']['companyName']
        price = r['data']['primaryData']['lastSalePrice'].strip('$')

        dividend = d['data']['annualizedDividend']
        if dividend == "N/A":
            dividend = get_dividend(d)

        ex_div_date, next_div_amount, payment_date = get_div_dates(ticker)

        stock_model, created = Stock.objects.update_or_create(ticker=ticker,
                                                              defaults={'price': price,
                                                                        'stock_name': name,
                                                                        'dividend': dividend,
                                                                        'ex_div_date': ex_div_date,
                                                                        'next_div_amount': next_div_amount,
                                                                        'payment_date': payment_date
                                                                        })
        if stock_model:
            stock_model.save()
        else:
            created.save()
        return {'stock_name': name}
    except Exception as e:
        raise Exception({'error': f'{e}'})


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


def get_div_dates(ticker):
    r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks', headers=headers)
    data = r.json()

    if not data['data']:
        return get_etf_data(ticker)

    elif data['data']['exDividendDate'] != 'N/A':
        ex_div_date = datetime.strptime(data['data']['exDividendDate'], '%m/%d/%Y')
        payment_date = datetime.strptime(data['data']['dividendPaymentDate'], '%m/%d/%Y')
        next_div_amount = data['data']['dividends']['rows'][0]['amount'].strip('$')
        if ex_div_date < datetime.now():
            return None, next_div_amount, payment_date
        correct_date = ex_div_date.strftime('%Y-%m-%d')
        return correct_date, next_div_amount, payment_date
    else:
        ex_div_date = datetime.strptime(data['data']['dividends']['rows'][0]['exOrEffDate'], '%m/%d/%Y')
        payment_date = datetime.strptime(data['data']['dividends']['rows'][0]['paymentDate'], '%m/%d/%Y')
        next_div_amount = data['data']['dividends']['rows'][0]['amount'].strip('$')
        if ex_div_date < datetime.now():
            return None, next_div_amount, payment_date
        correct_date = ex_div_date.strftime('%Y-%m-%d')
        return correct_date, next_div_amount, payment_date


def get_etf_data(ticker):
    try:
        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=etf', headers=headers)
        response = r.json()
        data = response['data']['dividends']['rows'][0]
        next_div_amount = data['amount'].strip('$')
        try:
            payment_date = datetime.strptime(data['paymentDate'], '%m/%d/%Y')
        except:
            payment_date = datetime.strptime(data['exOrEffDate'], '%m/%d/%Y')
        return None, next_div_amount, payment_date
    except Exception as e:
        print(f'Failed in get etf function {ticker} {e}')
        return None, None, None
