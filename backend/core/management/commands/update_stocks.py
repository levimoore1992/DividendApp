from django.core.management.base import BaseCommand

from dividends.models import Stock
from dividends.utils import get_stock_data


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        for stock in Stock.objects.all().values_list('ticker'):
            try:
                get_stock_data(stock[0])
                self.stdout.write(f"Data written for {stock} ")
            except:
                continue
        exit()