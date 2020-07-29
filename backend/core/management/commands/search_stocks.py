from django.core.management.base import BaseCommand
from dividends.models import Stock
from dividends.utils import get_stock_data

import requests


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        headers = {
            'cookie': 'ak_bmsc=20E72A11270979763019E15FB14E0DCB1736A44F8C3800009BCE195FDF6A4B4D~pl5CLirohlLftep4KFVUCxjldV2kJZwe1phGpJFFxegNukmOHzREg3ps0f/bkMe48K8NL8M1GQhJLRPps5DlBmtG0BXuSN1RPUMY4hkS3gA00Bmc+0jdiXLAje7c1TeWloivWpGTkkSuaLhSsgkjaNlmVaqEA3unwR/nGYjKwUAPHxYR+BVedplusn+E/nZU5fitdSdtITr/cwHUEYLVMMlOpnCUzK28sMQ0C+FtF/V5g=; bm_sv=34A4184E3404304D5213DD0F2D5FBD7C~X4OG3OPNszlrUcbEwz8C3jwzbVNI0MUF86gjlFsxTBrwmykxFiQC/AY24CfItDE8ZIMJbSd1HLImRim8yvwWJaPFEdXFdpi7h+6NFnA291jSoDdPgltVQj3IEk1mRIiQkZc4zuJvDQbszYN3IfG4pgYmT26q5cYt4cxUM3ldXMI='
        }

        data = requests.get(
            'https://www.nasdaq.com/api/v1/screener?analystConsensus=StrongBuy,Buy,Neutral&marketCap=Large,Medium,Mega,Small,Micro',
            headers=headers).json()['data']

        for stock in data:
            try:
                if stock['dividendData']['dividendYield'] > 5.0:
                    get_stock_data(stock['ticker'])
                    print(f'Added stock {stock["ticker"]}')
            except:
                print(f"Failed on {stock['ticker']}")
