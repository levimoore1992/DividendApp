from django.core.management.base import BaseCommand

from dividends.models import Stock
from dividends.utils import get_stock_data


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        for stock in Stock.objects.all().values_list('ticker'):
            try:
                get_stock_data(stock[0])
                print(f'Got stock data for {stock}')
            except Exception as e:
                print(f'Error on {stock[0]} {e}')
                continue
        exit()