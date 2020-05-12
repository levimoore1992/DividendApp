from rest_framework.response import Response

from rest_framework.views import APIView
from .serializers import TickerSerializer
from .models import Stock
from .utils import get_stock_data


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


