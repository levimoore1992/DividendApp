import io
from datetime import datetime

from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TickerSerializer
from .models import Stock
from .utils import get_stock_data
import requests
import pandas as pd
import calendar


class DividendViewSet(APIView):

    def post(self, request, *args, **kwargs):
        serializer = TickerSerializer(data=request.data)
        if serializer.is_valid():
            ticker = serializer.validated_data
        else:
            return Response({'error': 'Failed during serialization'})
        response = get_stock_data(ticker['ticker'])
        return Response(response)


class DividendListViewSet(APIView):

    def get(self, request, *args, **kwargs):
        stocks = Stock.objects.all().values()

        return Response(stocks)


class DividendScraper(APIView):

    def post(self, request, *args, **kwargs):
        ticker = request.data['ticker']
        excel_data = requests.get(
            f'https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1=1557754812&period2=1589377212&interval=1d&events=div')
        with io.BytesIO(excel_data.content) as excel:
            df = pd.read_csv(excel)
            response = df.T.to_dict().values()

        return Response(response)


class Portfolio(APIView):

    def get(self, request, *args, **kwargs):
        stocks = Stock.objects.filter(is_owned=True).values()
        return Response(stocks)


class ChartData(APIView):

    def post(self, request, *args, **kwargs):
        ticker = request.data['ticker']

        r = requests.get(f'https://api.nasdaq.com/api/quote/{ticker}/dividends?assetclass=stocks').json()
        shares_owned = Stock.objects.get(ticker=ticker).shares_owned

        row = r['data']['dividends']['rows'][0]
        date = datetime.strptime(row['paymentDate'], '%m/%d/%Y')
        month_number = date.month
        month = calendar.month_name[month_number]
        amount = row['amount'].strip('$')

        response = {'payment_month': month, 'amount': float(amount) * shares_owned}
        return Response(response)
