import yfinance as yf
from rest_framework.response import Response

from rest_framework.views import APIView
from .serializers import TickerSerializer
from .models import Stock


class DividendViewSet(APIView):

    def post(self, request, *args, **kwargs):
        serializer = TickerSerializer(data=request.data)
        if serializer.is_valid():
            ticker = serializer.validated_data
        else:
            return Response({'error': 'Failed during serialization'})
        stock = yf.Ticker(ticker['ticker'])
        try:
            dividend_rate = float(stock.info['dividendRate'])
            price = float(stock.info['ask'])
            name = stock.info['shortName']
        except Exception as e:
            print(e)
            return Response({'error': f"This stock does not have all the info"})

        shares_needed = 1200 / dividend_rate

        investment_needed = shares_needed * price
        stock_model = Stock(stock_name=name, dividend=dividend_rate,
                            price=price, shares_needed=shares_needed,
                            investment_needed=investment_needed)
        stock_model.save()
        return Response({'name': name, 'shares_needed': round(shares_needed),
                         'investment_needed': round(investment_needed)})


class DividendListViewSet(APIView):

    def get(self, request, *args, **kwargs):
        stocks = Stock.objects.all().values()

        return Response(stocks)

    def post(self):
        pass
