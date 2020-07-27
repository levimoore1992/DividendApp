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
        stocks = Stock.objects.filter(ex_div_date__gte=datetime.today()).values()

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


class DividendData(APIView):

    def post(self, request, *args, **kwargs):
        response = {}
        ticker = request.data['ticker']
        count = request.data['count']
        stocks = Stock.objects.all()
        if ticker in stocks.values_list('ticker', flat=True):
            qs = stocks.filter(ticker=ticker).first()
            if qs.payment_date:
                model_payment_date = qs.payment_date
                formatted_date = datetime.strptime(str(model_payment_date), '%Y-%m-%d')
                month_index = formatted_date.month
                month_name = calendar.month_name[month_index]
                amount_from_stock = qs.next_div_amount * count
                response['month'] = month_name
                response['amount'] = round(amount_from_stock)
                return Response(response)
            else:
                return Response({'message': 'Stock doesnt have a payment date yet'}, status=200)
        else:
            return Response({'message': 'Stock not in database'}, status=200)


def change_color(html_day):
    return html_day.replace("dummy-class", "bg-orange")


class CalendarData(APIView):

    def get(self, request, *args, **kwargs):
        months_set = set()
        calendars = []

        qs = Stock.objects.filter(is_owned=True, payment_date__gte=datetime.today())

        for item in qs:
            formatted_month = datetime.strptime(str(item.payment_date), '%Y-%m-%d')
            month_index = formatted_month.month
            year_index = formatted_month.year
            months_set.add((month_index, year_index))

        sorted_months = sorted(months_set)
        for month in sorted_months:
            html = calendar.HTMLCalendar()

            html.cssclasses = [
                "dummy-class u-white-background ",
                "dummy-class u-white-background ",
                "dummy-class u-white-background ",
                "dummy-class u-white-background ",
                "dummy-class u-white-background ",
                "dummy-class u-white-background ",
                "dummy-class u-white-background ",
            ]

            html_month = html.formatmonth(month[1], month[0])

            for stock in qs.filter(payment_date__month=month[0]):

                html_day = html.formatday(stock.payment_date.day, stock.payment_date.isoweekday() - 1)
                html_month = html_month.replace(html_day, change_color(html_day))
            calendars.append(html_month)

        stringified = " ".join(str(x) for x in calendars)
        return Response(stringified)


class OwnedStocks(APIView):

    def get(self, request, *args, **kwargs):
        stocks = Stock.objects.filter(is_owned=True).values()

        return Response(stocks)