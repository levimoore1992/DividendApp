from django.core.management.base import BaseCommand

from dividends.models import UnsupportedStocks
from dividends.utils import get_unsupported_stock_data


class Command(BaseCommand):
    def handle(self, *args, **kwargs):

        for u_stock in UnsupportedStocks.objects.all().values_list('ticker'):
            try:
                get_unsupported_stock_data(u_stock[0])
            except:
                continue
        exit()