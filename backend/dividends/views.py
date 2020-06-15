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

    def get(self, request, *args, **kwargs):
        response = {}

        for stock in Stock.objects.filter(is_owned=True).order_by('payment_date'):
            if stock.payment_date:
                model_payment_date = stock.payment_date
                formatted_date = datetime.strptime(str(model_payment_date), '%Y-%m-%d')
                month_index = formatted_date.month
                month_name = calendar.month_name[month_index]
                amount_from_stock = stock.next_div_amount * stock.shares_owned

                if month_name not in response:
                    response[month_name] = round(amount_from_stock)
                else:
                    response[month_name] += round(amount_from_stock)

        return Response(response)
