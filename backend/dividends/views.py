from rest_framework.response import Response

from rest_framework.views import APIView
from .serializers import TickerSerializer
from .models import Stock
from .utils import get_stock_data
import requests
import pandas as pd

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
        excel_data = requests.get(f'https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1=1557754812&period2=1589377212&interval=1d&events=div')
        df = pandas.read_excel(excel_data)
        response = dict(zip(df['Date'], df['Dividends']))
        return Response(response)
